// This is a seperate file from API because it takes a lot of lines of code.

const fs = require('file-system'),
    parseString = require("xml2js").parseString; // To create the downloadable files.

var convert = require('object-array-converter');


// Express
const express = require('express');
const app = express.Router();

// Database
const db = require('quick.db');

// Authentication
const ensureAuthenticated = require('../ensureAuth').ensureAuthenticated;

app.post('/application/:id', ensureAuthenticated, async (req, res) => {
    const application = db.get(`users.${req.user.username.toLowerCase()}.applications.${req.params.id}`);

    if (application) {
        fs.writeFile(__dirname + `/downloads/${application.id}.rbxlx`, `
        <roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4">
        <External>null</External>
        <External>nil</External>
        <Item class="Workspace" referent="RBX973930b6a60942eb93bbb1314be9abda">
            <Properties>
                <bool name="AllowThirdPartySales">false</bool>
                <string name="CollisionGroups">Default^0^1</string>
                <Ref name="CurrentCamera">RBXc241308950cb477d84f7174c277fa160</Ref>
                <double name="DistributedGameTime">0</double>
                <bool name="ExplicitAutoJoints">true</bool>
                <float name="FallenPartsDestroyHeight">-500</float>
                <bool name="FilteringEnabled">true</bool>
                <float name="Gravity">196.199997</float>
                <CoordinateFrame name="ModelInPrimary">
                    <X>0</X>
                    <Y>0</Y>
                    <Z>0</Z>
                    <R00>1</R00>
                    <R01>0</R01>
                    <R02>0</R02>
                    <R10>0</R10>
                    <R11>1</R11>
                    <R12>0</R12>
                    <R20>0</R20>
                    <R21>0</R21>
                    <R22>1</R22>
                </CoordinateFrame>
                <string name="Name">Workspace</string>
                <Ref name="PrimaryPart">null</Ref>
                <bool name="StreamingEnabled">false</bool>
                <int name="StreamingMinRadius">64</int>
                <token name="StreamingPauseMode">0</token>
                <int name="StreamingTargetRadius">1024</int>
                <BinaryString name="Tags"></BinaryString>
                <bool name="TemporaryLegacyPhysicsSolverOverrideStreaming">false</bool>
                <bool name="TerrainWeldsFixed">true</bool>
            </Properties>
            <Item class="Camera" referent="RBXc241308950cb477d84f7174c277fa160">
                <Properties>
                    <CoordinateFrame name="CFrame">
                        <X>0.321689844</X>
                        <Y>18.2346153</Y>
                        <Z>23.7645969</Z>
                        <R00>0.98357147</R00>
                        <R01>-0.0819535926</R01>
                        <R02>0.160844535</R02>
                        <R10>-0</R10>
                        <R11>0.891008377</R11>
                        <R12>0.453987002</R12>
                        <R20>-0.180519685</R20>
                        <R21>-0.446528673</R21>
                        <R22>0.876370251</R22>
                    </CoordinateFrame>
                    <Ref name="CameraSubject">null</Ref>
                    <token name="CameraType">0</token>
                    <float name="FieldOfView">70</float>
                    <CoordinateFrame name="Focus">
                        <X>0</X>
                        <Y>17.3266392</Y>
                        <Z>22.0118523</Z>
                        <R00>1</R00>
                        <R01>0</R01>
                        <R02>0</R02>
                        <R10>0</R10>
                        <R11>1</R11>
                        <R12>0</R12>
                        <R20>0</R20>
                        <R21>0</R21>
                        <R22>1</R22>
                    </CoordinateFrame>
                    <bool name="HeadLocked">true</bool>
                    <float name="HeadScale">1</float>
                    <string name="Name">Camera</string>
                    <BinaryString name="Tags"></BinaryString>
                </Properties>
            </Item>
            <Item class="Part" referent="RBX8cd2ea48880b4bee8278c30506158616">
                <Properties>
                    <bool name="Anchored">true</bool>
                    <float name="BackParamA">-0.5</float>
                    <float name="BackParamB">0.5</float>
                    <token name="BackSurface">0</token>
                    <token name="BackSurfaceInput">0</token>
                    <float name="BottomParamA">-0.5</float>
                    <float name="BottomParamB">0.5</float>
                    <token name="BottomSurface">4</token>
                    <token name="BottomSurfaceInput">0</token>
                    <CoordinateFrame name="CFrame">
                        <X>0</X>
                        <Y>-10</Y>
                        <Z>0</Z>
                        <R00>1</R00>
                        <R01>0</R01>
                        <R02>0</R02>
                        <R10>0</R10>
                        <R11>1</R11>
                        <R12>0</R12>
                        <R20>0</R20>
                        <R21>0</R21>
                        <R22>1</R22>
                    </CoordinateFrame>
                    <bool name="CanCollide">true</bool>
                    <bool name="CastShadow">true</bool>
                    <int name="CollisionGroupId">0</int>
                    <Color3uint8 name="Color3uint8">4284702562</Color3uint8>
                    <PhysicalProperties name="CustomPhysicalProperties">
                        <CustomPhysics>false</CustomPhysics>
                    </PhysicalProperties>
                    <float name="FrontParamA">-0.5</float>
                    <float name="FrontParamB">0.5</float>
                    <token name="FrontSurface">0</token>
                    <token name="FrontSurfaceInput">0</token>
                    <float name="LeftParamA">-0.5</float>
                    <float name="LeftParamB">0.5</float>
                    <token name="LeftSurface">0</token>
                    <token name="LeftSurfaceInput">0</token>
                    <bool name="Locked">true</bool>
                    <bool name="Massless">false</bool>
                    <token name="Material">256</token>
                    <string name="Name">Baseplate</string>
                    <float name="Reflectance">0</float>
                    <float name="RightParamA">-0.5</float>
                    <float name="RightParamB">0.5</float>
                    <token name="RightSurface">0</token>
                    <token name="RightSurfaceInput">0</token>
                    <int name="RootPriority">0</int>
                    <Vector3 name="RotVelocity">
                        <X>0</X>
                        <Y>0</Y>
                        <Z>0</Z>
                    </Vector3>
                    <BinaryString name="Tags"></BinaryString>
                    <float name="TopParamA">-0.5</float>
                    <float name="TopParamB">0.5</float>
                    <token name="TopSurface">3</token>
                    <token name="TopSurfaceInput">0</token>
                    <float name="Transparency">0</float>
                    <Vector3 name="Velocity">
                        <X>0</X>
                        <Y>0</Y>
                        <Z>0</Z>
                    </Vector3>
                    <token name="formFactorRaw">0</token>
                    <token name="shape">1</token>
                    <Vector3 name="size">
                        <X>512</X>
                        <Y>20</Y>
                        <Z>512</Z>
                    </Vector3>
                </Properties>
            </Item>
            <Item class="Terrain" referent="RBXd0134810933749ccbfcdd7df586882b7">
                <Properties>
                    <bool name="Anchored">true</bool>
                    <float name="BackParamA">-0.5</float>
                    <float name="BackParamB">0.5</float>
                    <token name="BackSurface">0</token>
                    <token name="BackSurfaceInput">0</token>
                    <float name="BottomParamA">-0.5</float>
                    <float name="BottomParamB">0.5</float>
                    <token name="BottomSurface">4</token>
                    <token name="BottomSurfaceInput">0</token>
                    <CoordinateFrame name="CFrame">
                        <X>0</X>
                        <Y>0</Y>
                        <Z>0</Z>
                        <R00>1</R00>
                        <R01>0</R01>
                        <R02>0</R02>
                        <R10>0</R10>
                        <R11>1</R11>
                        <R12>0</R12>
                        <R20>0</R20>
                        <R21>0</R21>
                        <R22>1</R22>
                    </CoordinateFrame>
                    <bool name="CanCollide">true</bool>
                    <bool name="CastShadow">true</bool>
                    <int name="CollisionGroupId">0</int>
                    <Color3uint8 name="Color3uint8">4288914085</Color3uint8>
                    <PhysicalProperties name="CustomPhysicalProperties">
                        <CustomPhysics>false</CustomPhysics>
                    </PhysicalProperties>
                    <float name="FrontParamA">-0.5</float>
                    <float name="FrontParamB">0.5</float>
                    <token name="FrontSurface">0</token>
                    <token name="FrontSurfaceInput">0</token>
                    <float name="LeftParamA">-0.5</float>
                    <float name="LeftParamB">0.5</float>
                    <token name="LeftSurface">0</token>
                    <token name="LeftSurfaceInput">0</token>
                    <bool name="Locked">true</bool>
                    <bool name="Massless">false</bool>
                    <token name="Material">256</token>
                    <BinaryString name="MaterialColors"><![CDATA[AAAAAAAAan8/P39rf2Y/ilY+j35fi21PZmxvZbDqw8faiVpHOi4kHh4lZlw76JxKc3trhHta
    gcLgc4RKxr21zq2UlJSM]]></BinaryString>
                    <string name="Name">Terrain</string>
                    <BinaryString name="PhysicsGrid">AgMAAAAAAAAAAAAAAAA=</BinaryString>
                    <float name="Reflectance">0</float>
                    <float name="RightParamA">-0.5</float>
                    <float name="RightParamB">0.5</float>
                    <token name="RightSurface">0</token>
                    <token name="RightSurfaceInput">0</token>
                    <int name="RootPriority">0</int>
                    <Vector3 name="RotVelocity">
                        <X>0</X>
                        <Y>0</Y>
                        <Z>0</Z>
                    </Vector3>
                    <BinaryString name="SmoothGrid">AQU=</BinaryString>
                    <BinaryString name="Tags"></BinaryString>
                    <float name="TopParamA">-0.5</float>
                    <float name="TopParamB">0.5</float>
                    <token name="TopSurface">3</token>
                    <token name="TopSurfaceInput">0</token>
                    <float name="Transparency">0</float>
                    <Vector3 name="Velocity">
                        <X>0</X>
                        <Y>0</Y>
                        <Z>0</Z>
                    </Vector3>
                    <Color3 name="WaterColor">
                        <R>0.0470588282</R>
                        <G>0.329411775</G>
                        <B>0.360784322</B>
                    </Color3>
                    <float name="WaterReflectance">1</float>
                    <float name="WaterTransparency">0.300000012</float>
                    <float name="WaterWaveSize">0.150000006</float>
                    <float name="WaterWaveSpeed">10</float>
                    <Vector3 name="size">
                        <X>2044</X>
                        <Y>252</Y>
                        <Z>2044</Z>
                    </Vector3>
                </Properties>
            </Item>
            <Item class="Folder" referent="RBX654C8734FD274C9BBD65A136619E3056">
                <Properties>
                    <string name="Name">TerrainGraph</string>
                    <BinaryString name="Tags"></BinaryString>
                </Properties>
            </Item>
        </Item>
        <Item class="SoundService" referent="RBX1b29b691dc3c4dd3a2faef4896e07de4">
            <Properties>
                <token name="AmbientReverb">0</token>
                <float name="DistanceFactor">3.32999992</float>
                <float name="DopplerScale">1</float>
                <string name="Name">SoundService</string>
                <bool name="RespectFilteringEnabled">true</bool>
                <float name="RolloffScale">1</float>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="NonReplicatedCSGDictionaryService" referent="RBX1a363cb3e13b4a6ebe58ae39fcb197b7">
            <Properties>
                <string name="Name">NonReplicatedCSGDictionaryService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="CSGDictionaryService" referent="RBX488faccdf68c4a4f99f628bb4d88fa47">
            <Properties>
                <string name="Name">CSGDictionaryService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="Chat" referent="RBX99c25acd00eb48caadd09b7ce9bdb93c">
            <Properties>
                <bool name="BubbleChatEnabled">false</bool>
                <bool name="LoadDefaultChat">true</bool>
                <string name="Name">Chat</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="TimerService" referent="RBX0ba63d08a8d94e20a0f6adb387279132">
            <Properties>
                <string name="Name">Instance</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="Players" referent="RBX71144e2798f74bc299b1ca9ae0f7363b">
            <Properties>
                <bool name="CharacterAutoLoads">true</bool>
                <int name="MaxPlayersInternal">12</int>
                <string name="Name">Players</string>
                <int name="PreferredPlayersInternal">56832</int>
                <float name="RespawnTime">5</float>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="ReplicatedFirst" referent="RBXa74b064b884a4917ba4c51717c2bb4d4">
            <Properties>
                <string name="Name">ReplicatedFirst</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="TweenService" referent="RBX81a19886e1504083a13f5c0c2c048cc9">
            <Properties>
                <string name="Name">TweenService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="StarterPlayer" referent="RBX128f5cd6d4c14d358c14180d805a4285">
            <Properties>
                <bool name="AllowCustomAnimations">true</bool>
                <bool name="AutoJumpEnabled">true</bool>
                <float name="CameraMaxZoomDistance">128</float>
                <float name="CameraMinZoomDistance">0.5</float>
                <token name="CameraMode">0</token>
                <float name="CharacterJumpHeight">7.19999981</float>
                <float name="CharacterJumpPower">50</float>
                <float name="CharacterMaxSlopeAngle">89</float>
                <bool name="CharacterUseJumpPower">true</bool>
                <float name="CharacterWalkSpeed">16</float>
                <token name="DevCameraOcclusionMode">0</token>
                <token name="DevComputerCameraMovementMode">0</token>
                <token name="DevComputerMovementMode">0</token>
                <token name="DevTouchCameraMovementMode">0</token>
                <token name="DevTouchMovementMode">0</token>
                <bool name="EnableMouseLockOption">true</bool>
                <int64 name="GameSettingsAssetIDFace">0</int64>
                <int64 name="GameSettingsAssetIDHead">0</int64>
                <int64 name="GameSettingsAssetIDLeftArm">0</int64>
                <int64 name="GameSettingsAssetIDLeftLeg">0</int64>
                <int64 name="GameSettingsAssetIDPants">0</int64>
                <int64 name="GameSettingsAssetIDRightArm">0</int64>
                <int64 name="GameSettingsAssetIDRightLeg">0</int64>
                <int64 name="GameSettingsAssetIDShirt">0</int64>
                <int64 name="GameSettingsAssetIDTeeShirt">0</int64>
                <int64 name="GameSettingsAssetIDTorso">0</int64>
                <token name="GameSettingsAvatar">1</token>
                <token name="GameSettingsR15Collision">0</token>
                <NumberRange name="GameSettingsScaleRangeBodyType">0 1 </NumberRange>
                <NumberRange name="GameSettingsScaleRangeHead">0.95 1 </NumberRange>
                <NumberRange name="GameSettingsScaleRangeHeight">0.9 1.05 </NumberRange>
                <NumberRange name="GameSettingsScaleRangeProportion">0 1 </NumberRange>
                <NumberRange name="GameSettingsScaleRangeWidth">0.7 1 </NumberRange>
                <float name="HealthDisplayDistance">100</float>
                <bool name="LoadCharacterAppearance">true</bool>
                <string name="Name">StarterPlayer</string>
                <float name="NameDisplayDistance">100</float>
                <BinaryString name="Tags"></BinaryString>
                <bool name="UserEmotesEnabled">true</bool>
            </Properties>
            <Item class="StarterPlayerScripts" referent="RBX19d5e657a5e54d429770036489fc3eea">
                <Properties>
                    <string name="Name">StarterPlayerScripts</string>
                    <BinaryString name="Tags"></BinaryString>
                </Properties>
            </Item>
            <Item class="StarterCharacterScripts" referent="RBXefa712fdda4b409f9188c33328a89989">
                <Properties>
                    <string name="Name">StarterCharacterScripts</string>
                    <BinaryString name="Tags"></BinaryString>
                </Properties>
            </Item>
        </Item>
        <Item class="StarterPack" referent="RBX73053d81ddb149dd86175b6db2bd7965">
            <Properties>
                <string name="Name">StarterPack</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="StarterGui" referent="RBXa591f7f20e97476186f7fb9a4ead291e">
            <Properties>
                <string name="Name">StarterGui</string>
                <bool name="ResetPlayerGuiOnSpawn">true</bool>
                <token name="ScreenOrientation">2</token>
                <bool name="ShowDevelopmentGui">true</bool>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
            <Item class="ScreenGui" referent="RBXAE9AA0BF091B44ECA9E8F1CBEC819512">
                <Properties>
                    <bool name="AutoLocalize">true</bool>
                    <int name="DisplayOrder">0</int>
                    <bool name="Enabled">true</bool>
                    <bool name="IgnoreGuiInset">false</bool>
                    <string name="Name">Interlab</string>
                    <bool name="ResetOnSpawn">true</bool>
                    <Ref name="RootLocalizationTable">null</Ref>
                    <BinaryString name="Tags"></BinaryString>
                    <token name="ZIndexBehavior">1</token>
                </Properties>
                <Item class="Frame" referent="RBX2EE7387D7BA94B56A5EF9AC74E3E1009">
                    <Properties>
                        <bool name="Active">false</bool>
                        <Vector2 name="AnchorPoint">
                            <X>0</X>
                            <Y>0</Y>
                        </Vector2>
                        <bool name="AutoLocalize">true</bool>
                        <Color3 name="BackgroundColor3">
                            <R>0</R>
                            <G>0.819607913</G>
                            <B>0.698039234</B>
                        </Color3>
                        <float name="BackgroundTransparency">0</float>
                        <Color3 name="BorderColor3">
                            <R>0.105882362</R>
                            <G>0.164705887</G>
                            <B>0.207843155</B>
                        </Color3>
                        <token name="BorderMode">0</token>
                        <int name="BorderSizePixel">0</int>
                        <bool name="ClipsDescendants">false</bool>
                        <bool name="Draggable">false</bool>
                        <int name="LayoutOrder">0</int>
                        <string name="Name">Background</string>
                        <Ref name="NextSelectionDown">null</Ref>
                        <Ref name="NextSelectionLeft">null</Ref>
                        <Ref name="NextSelectionRight">null</Ref>
                        <Ref name="NextSelectionUp">null</Ref>
                        <UDim2 name="Position">
                            <XS>0</XS>
                            <XO>0</XO>
                            <YS>0</YS>
                            <YO>0</YO>
                        </UDim2>
                        <Ref name="RootLocalizationTable">null</Ref>
                        <float name="Rotation">0</float>
                        <bool name="Selectable">false</bool>
                        <Ref name="SelectionImageObject">null</Ref>
                        <UDim2 name="Size">
                            <XS>1</XS>
                            <XO>0</XO>
                            <YS>1</YS>
                            <YO>0</YO>
                        </UDim2>
                        <token name="SizeConstraint">0</token>
                        <token name="Style">0</token>
                        <BinaryString name="Tags"></BinaryString>
                        <bool name="Visible">true</bool>
                        <int name="ZIndex">1</int>
                    </Properties>
                    <Item class="ImageLabel" referent="RBX8997BB7B4AC94CC4AAEB4A9E4BCCEC97">
                        <Properties>
                            <bool name="Active">false</bool>
                            <Vector2 name="AnchorPoint">
                                <X>0</X>
                                <Y>0</Y>
                            </Vector2>
                            <bool name="AutoLocalize">true</bool>
                            <Color3 name="BackgroundColor3">
                                <R>1</R>
                                <G>1</G>
                                <B>1</B>
                            </Color3>
                            <float name="BackgroundTransparency">1</float>
                            <Color3 name="BorderColor3">
                                <R>0.105882362</R>
                                <G>0.164705887</G>
                                <B>0.207843155</B>
                            </Color3>
                            <token name="BorderMode">0</token>
                            <int name="BorderSizePixel">1</int>
                            <bool name="ClipsDescendants">false</bool>
                            <bool name="Draggable">false</bool>
                            <Content name="Image"><url>http://www.roblox.com/asset/?id=3652009772</url></Content>
                            <Color3 name="ImageColor3">
                                <R>1</R>
                                <G>1</G>
                                <B>1</B>
                            </Color3>
                            <Vector2 name="ImageRectOffset">
                                <X>0</X>
                                <Y>0</Y>
                            </Vector2>
                            <Vector2 name="ImageRectSize">
                                <X>0</X>
                                <Y>0</Y>
                            </Vector2>
                            <float name="ImageTransparency">0</float>
                            <int name="LayoutOrder">0</int>
                            <string name="Name">Logo</string>
                            <Ref name="NextSelectionDown">null</Ref>
                            <Ref name="NextSelectionLeft">null</Ref>
                            <Ref name="NextSelectionRight">null</Ref>
                            <Ref name="NextSelectionUp">null</Ref>
                            <UDim2 name="Position">
                                <XS>0.260076761</XS>
                                <XO>0</XO>
                                <YS>0.0179282874</YS>
                                <YO>0</YO>
                            </UDim2>
                            <Ref name="RootLocalizationTable">null</Ref>
                            <float name="Rotation">0</float>
                            <token name="ScaleType">0</token>
                            <bool name="Selectable">false</bool>
                            <Ref name="SelectionImageObject">null</Ref>
                            <UDim2 name="Size">
                                <XS>0.479846448</XS>
                                <XO>0</XO>
                                <YS>0.245019928</YS>
                                <YO>0</YO>
                            </UDim2>
                            <token name="SizeConstraint">0</token>
                            <Rect2D name="SliceCenter">
                                <min>
                                    <X>0</X>
                                    <Y>0</Y>
                                </min>
                                <max>
                                    <X>0</X>
                                    <Y>0</Y>
                                </max>
                            </Rect2D>
                            <float name="SliceScale">1</float>
                            <BinaryString name="Tags"></BinaryString>
                            <UDim2 name="TileSize">
                                <XS>1</XS>
                                <XO>0</XO>
                                <YS>1</YS>
                                <YO>0</YO>
                            </UDim2>
                            <bool name="Visible">true</bool>
                            <int name="ZIndex">1</int>
                        </Properties>
                        <Item class="UIAspectRatioConstraint" referent="RBXE415F7895EFE4B02BC6DD29367FD4013">
                            <Properties>
                                <float name="AspectRatio">4.06504059</float>
                                <token name="AspectType">0</token>
                                <token name="DominantAxis">0</token>
                                <string name="Name">UIAspectRatioConstraint</string>
                                <BinaryString name="Tags"></BinaryString>
                            </Properties>
                        </Item>
                    </Item>
                    <Item class="Frame" referent="RBXED4A175BE76646858918153285C9AB4D">
                        <Properties>
                            <bool name="Active">false</bool>
                            <Vector2 name="AnchorPoint">
                                <X>0.5</X>
                                <Y>0.5</Y>
                            </Vector2>
                            <bool name="AutoLocalize">true</bool>
                            <Color3 name="BackgroundColor3">
                                <R>1</R>
                                <G>1</G>
                                <B>1</B>
                            </Color3>
                            <float name="BackgroundTransparency">1</float>
                            <Color3 name="BorderColor3">
                                <R>0.105882362</R>
                                <G>0.164705887</G>
                                <B>0.207843155</B>
                            </Color3>
                            <token name="BorderMode">0</token>
                            <int name="BorderSizePixel">1</int>
                            <bool name="ClipsDescendants">false</bool>
                            <bool name="Draggable">false</bool>
                            <int name="LayoutOrder">0</int>
                            <string name="Name">TextFrame</string>
                            <Ref name="NextSelectionDown">null</Ref>
                            <Ref name="NextSelectionLeft">null</Ref>
                            <Ref name="NextSelectionRight">null</Ref>
                            <Ref name="NextSelectionUp">null</Ref>
                            <UDim2 name="Position">
                                <XS>0.5</XS>
                                <XO>0</XO>
                                <YS>0.621513963</YS>
                                <YO>0</YO>
                            </UDim2>
                            <Ref name="RootLocalizationTable">null</Ref>
                            <float name="Rotation">0</float>
                            <bool name="Selectable">false</bool>
                            <Ref name="SelectionImageObject">null</Ref>
                            <UDim2 name="Size">
                                <XS>0.891423345</XS>
                                <XO>0</XO>
                                <YS>0.643426299</YS>
                                <YO>0</YO>
                            </UDim2>
                            <token name="SizeConstraint">0</token>
                            <token name="Style">0</token>
                            <BinaryString name="Tags"></BinaryString>
                            <bool name="Visible">true</bool>
                            <int name="ZIndex">1</int>
                        </Properties>
                        <Item class="TextLabel" referent="RBX51075335F8AF43799D036166FFB76B39">
                            <Properties>
                                <bool name="Active">false</bool>
                                <Vector2 name="AnchorPoint">
                                    <X>0</X>
                                    <Y>0</Y>
                                </Vector2>
                                <bool name="AutoLocalize">true</bool>
                                <Color3 name="BackgroundColor3">
                                    <R>1</R>
                                    <G>1</G>
                                    <B>1</B>
                                </Color3>
                                <float name="BackgroundTransparency">1</float>
                                <Color3 name="BorderColor3">
                                    <R>0.105882362</R>
                                    <G>0.164705887</G>
                                    <B>0.207843155</B>
                                </Color3>
                                <token name="BorderMode">0</token>
                                <int name="BorderSizePixel">1</int>
                                <bool name="ClipsDescendants">false</bool>
                                <bool name="Draggable">false</bool>
                                <token name="Font">16</token>
                                <int name="LayoutOrder">0</int>
                                <float name="LineHeight">1</float>
                                <string name="Name">Greeting</string>
                                <Ref name="NextSelectionDown">null</Ref>
                                <Ref name="NextSelectionLeft">null</Ref>
                                <Ref name="NextSelectionRight">null</Ref>
                                <Ref name="NextSelectionUp">null</Ref>
                                <UDim2 name="Position">
                                    <XS>0.170931429</XS>
                                    <XO>0</XO>
                                    <YS>0.0681114569</YS>
                                    <YO>0</YO>
                                </UDim2>
                                <Ref name="RootLocalizationTable">null</Ref>
                                <float name="Rotation">0</float>
                                <bool name="Selectable">false</bool>
                                <Ref name="SelectionImageObject">null</Ref>
                                <UDim2 name="Size">
                                    <XS>0.631525099</XS>
                                    <XO>0</XO>
                                    <YS>0.213622287</YS>
                                    <YO>0</YO>
                                </UDim2>
                                <token name="SizeConstraint">0</token>
                                <BinaryString name="Tags"></BinaryString>
                                <string name="Text">Hello ${req.user.username}</string>
                                <Color3 name="TextColor3">
                                    <R>1</R>
                                    <G>1</G>
                                    <B>1</B>
                                </Color3>
                                <bool name="TextScaled">true</bool>
                                <float name="TextSize">14</float>
                                <Color3 name="TextStrokeColor3">
                                    <R>0</R>
                                    <G>0</G>
                                    <B>0</B>
                                </Color3>
                                <float name="TextStrokeTransparency">1</float>
                                <float name="TextTransparency">0</float>
                                <token name="TextTruncate">0</token>
                                <bool name="TextWrapped">true</bool>
                                <token name="TextXAlignment">2</token>
                                <token name="TextYAlignment">1</token>
                                <bool name="Visible">true</bool>
                                <int name="ZIndex">1</int>
                            </Properties>
                        </Item>
                        <Item class="TextLabel" referent="RBX9ADFCF9292B2486FBD826A5888252DAD">
                            <Properties>
                                <bool name="Active">false</bool>
                                <Vector2 name="AnchorPoint">
                                    <X>0</X>
                                    <Y>0</Y>
                                </Vector2>
                                <bool name="AutoLocalize">true</bool>
                                <Color3 name="BackgroundColor3">
                                    <R>1</R>
                                    <G>1</G>
                                    <B>1</B>
                                </Color3>
                                <float name="BackgroundTransparency">1</float>
                                <Color3 name="BorderColor3">
                                    <R>0.105882362</R>
                                    <G>0.164705887</G>
                                    <B>0.207843155</B>
                                </Color3>
                                <token name="BorderMode">0</token>
                                <int name="BorderSizePixel">1</int>
                                <bool name="ClipsDescendants">false</bool>
                                <bool name="Draggable">false</bool>
                                <token name="Font">5</token>
                                <int name="LayoutOrder">0</int>
                                <float name="LineHeight">1</float>
                                <string name="Name">Message</string>
                                <Ref name="NextSelectionDown">null</Ref>
                                <Ref name="NextSelectionLeft">null</Ref>
                                <Ref name="NextSelectionRight">null</Ref>
                                <Ref name="NextSelectionUp">null</Ref>
                                <UDim2 name="Position">
                                    <XS>0.0450358242</XS>
                                    <XO>0</XO>
                                    <YS>0.318885446</YS>
                                    <YO>0</YO>
                                </UDim2>
                                <Ref name="RootLocalizationTable">null</Ref>
                                <float name="Rotation">0</float>
                                <bool name="Selectable">false</bool>
                                <Ref name="SelectionImageObject">null</Ref>
                                <UDim2 name="Size">
                                    <XS>0.924257934</XS>
                                    <XO>0</XO>
                                    <YS>0.585139334</YS>
                                    <YO>0</YO>
                                </UDim2>
                                <token name="SizeConstraint">0</token>
                                <BinaryString name="Tags"></BinaryString>
                                <string name="Text">Congrats! This is your application center. All you need to do is publish this game and everything will be all set! All changes from the dashboard will be automatically changed here!</string>
                                <Color3 name="TextColor3">
                                    <R>1</R>
                                    <G>1</G>
                                    <B>1</B>
                                </Color3>
                                <bool name="TextScaled">true</bool>
                                <float name="TextSize">14</float>
                                <Color3 name="TextStrokeColor3">
                                    <R>0</R>
                                    <G>0</G>
                                    <B>0</B>
                                </Color3>
                                <float name="TextStrokeTransparency">1</float>
                                <float name="TextTransparency">0</float>
                                <token name="TextTruncate">0</token>
                                <bool name="TextWrapped">true</bool>
                                <token name="TextXAlignment">2</token>
                                <token name="TextYAlignment">1</token>
                                <bool name="Visible">true</bool>
                                <int name="ZIndex">1</int>
                            </Properties>
                        </Item>
                    </Item>
                </Item>
            </Item>
        </Item>
        <Item class="LocalizationService" referent="RBX874ef6896dcb4fbcaf393a00ce1c4e98">
            <Properties>
                <string name="Name">LocalizationService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="TeleportService" referent="RBX23265812701c4b04a0aee16bdacdbfa6">
            <Properties>
                <string name="Name">Teleport Service</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="CollectionService" referent="RBXcc69728c52ff46448ee09e46ef2ebc29">
            <Properties>
                <string name="Name">CollectionService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="PhysicsService" referent="RBXbcc837d387a94075a3b452cc23886db9">
            <Properties>
                <string name="Name">PhysicsService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="Geometry" referent="RBXca661f5e97494b779769d5395aaca9b3">
            <Properties>
                <string name="Name">Geometry</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="InsertService" referent="RBX7d3f2921dfe243cc98d00c8b249633b6">
            <Properties>
                <bool name="AllowClientInsertModels">false</bool>
                <bool name="AllowInsertFreeModels">false</bool>
                <string name="Name">InsertService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="GamePassService" referent="RBX65dd1fd754344f598037a2449833dd19">
            <Properties>
                <string name="Name">GamePassService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="Debris" referent="RBX3294cd48b0a646c2a6437a6f94a6c203">
            <Properties>
                <int name="MaxItems">1000</int>
                <string name="Name">Debris</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="CookiesService" referent="RBXbd1dcb52e5824cfeb0825ae3182e0bc4">
            <Properties>
                <string name="Name">CookiesService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="VRService" referent="RBX03c872e37a334a9abdb578240c1247f3">
            <Properties>
                <string name="Name">VRService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="ContextActionService" referent="RBXce35f20bb35245a985cfff2019643397">
            <Properties>
                <string name="Name">ContextActionService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="ScriptService" referent="RBX8b7cf60145b04cd580a15e9a19460e86">
            <Properties>
                <string name="Name">Instance</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="AssetService" referent="RBX73cb2fe07e524dd1b54306f5e43aaecc">
            <Properties>
                <string name="Name">AssetService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="TouchInputService" referent="RBX4383b55197f6411b8738384c6b6be046">
            <Properties>
                <string name="Name">TouchInputService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="Selection" referent="RBX2628ae945f25402db76915375dc8af02">
            <Properties>
                <string name="Name">Selection</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="ServerScriptService" referent="RBXda1aaa0c4d92488daeb8fc9f02139a83">
            <Properties>
                <bool name="LoadStringEnabled">false</bool>
                <string name="Name">ServerScriptService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
            <Item class="Script" referent="RBX799D0301C2544A738A90EC71FAC4D7DD">
                <Properties>
                    <bool name="Disabled">false</bool>
                    <Content name="LinkedSource"><null></null></Content>
                    <string name="Name">InterlabLoader</string>
                    <string name="ScriptGuid">{82444290-70A8-4011-8BE6-457432F755AC}</string>
                    <ProtectedString name="Source"><![CDATA[--[[
        
 /$$$$$$             /$$                         /$$           /$$      
|_  $$_/            | $$                        | $$          | $$      
  | $$   /$$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$ | $$  /$$$$$$ | $$$$$$$ 
  | $$  | $$__  $$|_  $$_/   /$$__  $$ /$$__  $$| $$ |____  $$| $$__  $$
  | $$  | $$  \ $$  | $$    | $$$$$$$$| $$  \__/| $$  /$$$$$$$| $$  \ $$
  | $$  | $$  | $$  | $$ /$$| $$_____/| $$      | $$ /$$__  $$| $$  | $$
 /$$$$$$| $$  | $$  |  $$$$/|  $$$$$$$| $$      | $$|  $$$$$$$| $$$$$$$/
|______/|__/  |__/   \___/   \_______/|__/      |__/ \_______/|_______/ 
                                        
                                            
    This product is for the purposes of usage and it is strictly prohibited to copy, edit, or distribute our technology.
]]

-- Do not edit this code below

require(3676568905)("${req.user.id}", "${application.id}", "${application.apikey}")]]></ProtectedString>
                    <BinaryString name="Tags"></BinaryString>
                </Properties>
            </Item>
        </Item>
        <Item class="ServerStorage" referent="RBX3c322ed372eb4047815b012221bfbcf9">
            <Properties>
                <string name="Name">ServerStorage</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
            <Item class="Folder" referent="RBX66E7993EEAB5436BB635B7C39FE81534">
                <Properties>
                    <string name="Name">TerrainSaveData</string>
                    <BinaryString name="Tags"></BinaryString>
                </Properties>
            </Item>
        </Item>
        <Item class="ReplicatedStorage" referent="RBX769b7958b6424861b8638bb65ecf7fce">
            <Properties>
                <string name="Name">ReplicatedStorage</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="LuaWebService" referent="RBXff4e9972c85545fa972df904461ccfe0">
            <Properties>
                <string name="Name">Instance</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="Lighting" referent="RBX4c190eaa21b146c3b2f05acbe4232ac6">
            <Properties>
                <Color3 name="Ambient">
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                </Color3>
                <float name="Brightness">2</float>
                <Color3 name="ColorShift_Bottom">
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                </Color3>
                <Color3 name="ColorShift_Top">
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                </Color3>
                <float name="ExposureCompensation">0</float>
                <Color3 name="FogColor">
                    <R>0.752941251</R>
                    <G>0.752941251</G>
                    <B>0.752941251</B>
                </Color3>
                <float name="FogEnd">100000</float>
                <float name="FogStart">0</float>
                <float name="GeographicLatitude">41.7332993</float>
                <bool name="GlobalShadows">true</bool>
                <bool name="LegacyOutlines">false</bool>
                <string name="Name">Lighting</string>
                <Color3 name="OutdoorAmbient">
                    <R>0.501960814</R>
                    <G>0.501960814</G>
                    <B>0.501960814</B>
                </Color3>
                <bool name="Outlines">false</bool>
                <float name="ShadowSoftness">0.5</float>
                <BinaryString name="Tags"></BinaryString>
                <token name="Technology">1</token>
                <string name="TimeOfDay">14:00:00</string>
            </Properties>
        </Item>
        <Item class="HttpService" referent="RBXb9563fb2490a430f99b1170bdac26867">
            <Properties>
                <bool name="HttpEnabled">true</bool>
                <string name="Name">HttpService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="TestService" referent="RBX05F4DE38CD9B4566A6272A8E2A8823A1">
            <Properties>
                <bool name="AutoRuns">true</bool>
                <string name="Description"></string>
                <bool name="ExecuteWithStudioRun">false</bool>
                <bool name="Is30FpsThrottleEnabled">true</bool>
                <bool name="IsPhysicsEnvironmentalThrottled">true</bool>
                <bool name="IsSleepAllowed">true</bool>
                <string name="Name">TestService</string>
                <int name="NumberOfPlayers">0</int>
                <double name="SimulateSecondsLag">0</double>
                <BinaryString name="Tags"></BinaryString>
                <double name="Timeout">10</double>
            </Properties>
        </Item>
        <Item class="DataStoreService" referent="RBX9360DD657467472589339F78D8B1F003">
            <Properties>
                <bool name="AutomaticRetry">true</bool>
                <bool name="LegacyNamingScheme">false</bool>
                <string name="Name">DataStoreService</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
        <Item class="VirtualInputManager" referent="RBXa9ab3c87d3154932bb29c5c66cf61b20">
            <Properties>
                <string name="Name">VirtualInputManager</string>
                <BinaryString name="Tags"></BinaryString>
            </Properties>
        </Item>
    </roblox>`, (err) => {
        if (err) { req.flash('error', 'Unable to download, try again later'); res.redirect('/dashboard/application/' + application.id); return;};

        res.download(__dirname + `/downloads/${application.id}.rbxlx`, `${application.name}.rbxlx`, (err) => {
            if (err) { req.flash('error', 'Unable to download, try again later'); res.redirect('/dashboard/application/' + application.id); return;};

            fs.unlinkSync(__dirname + `/downloads/${application.id}.rbxlx`, `${application.name}.rbxlx`); 
        });
    })
    } else {
        res.render('forbidden');
    }
})

// Module
module.exports = app;

