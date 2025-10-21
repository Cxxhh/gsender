import { Routes, Route, Outlet } from 'react-router';
import noop from 'lodash/noop';
import { BiSolidCylinder } from 'react-icons/bi';

import Workspace from './workspace';
import i18n from 'app/lib/i18n';
import { Config } from './features/Config';
import Firmware from './features/Firmware';
import KeyboardShortcuts from './features/Keyboard';
import MovementTuning from './features/MovementTuning';
import Squaring from './features/Squaring';
import { StatParent } from './features/Stats/StatParent';
import Surfacing from './features/Surfacing';
import ToolCard from './components/ToolCard';
import { GiFlatPlatform } from 'react-icons/gi';
import { FaGamepad, FaKeyboard, FaMicrochip } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';
import { MdSquareFoot } from 'react-icons/md';
import { Alarms } from './features/Stats/Alarms';
import { Stats } from './features/Stats';
import { Jobs } from './features/Stats/Jobs';
import { Maintenance } from './features/Stats/Maintenance';
import Page from './components/Page';
import { MachineInfoDisplay } from './features/MachineInfo/MachineInfoDisplay';
import { NotificationDisplay } from './features/NotificationsArea/NotificationDisplay';
import { WorkspaceSelector } from './features/WorkspaceSelector';
import DRO from './features/DRO';
import { RemoteWidget } from './components/RemoteWidget';
import Coolant from './features/Coolant';
import FileControl from './features/FileControl';
import JobControl from './features/JobControl';
import { Jogging } from './features/Jogging';
import Macros from './features/Macros';
import Probe from './features/Probe';
import Rotary from './features/Rotary';
import Spindle from './features/Spindle';
import About from './features/Stats/About';
import { BottomNav } from './features/RemoteMode/components/BottomNav';
import Gamepad from './features/Gamepad';
import { TopBar } from 'app/workspace/TopBar';
import Console from 'app/features/Console';
import Profile from './features/Gamepad/Profile';
import RotarySurfacing from './features/Rotary/RotarySurfacing';
import ConfirmationDialog from './components/ConfirmationDialog/ConfirmationDialog';

export const ReactRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Workspace />}>
                <Route index element={<></>} />
                <Route
                    path="configuration"
                    element={
                        <div className="flex max-h-4/5 overflow-y-clip items-center justify-center no-scrollbar">
                            <Config />
                        </div>
                    }
                />
                <Route
                    path="tools"
                    element={
                        <>
                            <Outlet />
                        </>
                    }
                >
                    <Route
                        index
                        element={
                            <div className="p-4 fixed-content-area no-scrollbar">
                                <p className="text-lg font-semibold mb-4 dark:text-white">
                                    {i18n._('Choose a tool to get started...')}
                                </p>

                                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 fixed-select-tool-area overflow-y-auto overflow-x-hidden">
                                    <ToolCard
                                        title={i18n._('Surfacing')}
                                        description={i18n._(
                                            'Flatten your wasteboard or other non-flat stock',
                                        )}
                                        icon={GiFlatPlatform}
                                        link="/tools/surfacing"
                                    />

                                    <ToolCard
                                        title={i18n._('Rotary Surfacing')}
                                        description={i18n._(
                                            'Turn square material into round stock for rotary cutting',
                                        )}
                                        icon={BiSolidCylinder}
                                        link="/tools/rotary-surfacing"
                                    />

                                    <ToolCard
                                        title={i18n._('Movement Tuning')}
                                        description={i18n._(
                                            'Ensure that each axis of your machine is moving accurately',
                                        )}
                                        icon={TbRulerMeasure}
                                        link="/tools/movement-tuning"
                                    />

                                    <ToolCard
                                        title={i18n._('XY Squaring')}
                                        description={i18n._(
                                            'Get your CNC accurately aligned to make square cuts',
                                        )}
                                        icon={MdSquareFoot}
                                        link="/tools/squaring"
                                    />

                                    <ToolCard
                                        title={i18n._('Keyboard Shortcuts')}
                                        description={i18n._(
                                            'Set up keyboard shortcuts for easy navigation and control',
                                        )}
                                        icon={FaKeyboard}
                                        link="/tools/keyboard-shortcuts"
                                    />

                                    <ToolCard
                                        title={i18n._('Gamepad')}
                                        description={i18n._(
                                            'Easy hand-held CNC control using pre-made or custom profiles',
                                        )}
                                        icon={FaGamepad}
                                        link="/tools/gamepad"
                                    />

                                    <ToolCard
                                        title={i18n._('Old Firmware')}
                                        description={i18n._(
                                            'This is depreciated and used to be used for updating firmware',
                                        )}
                                        icon={FaMicrochip}
                                        link="/tools/firmware"
                                    />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="keyboard-shortcuts"
                        element={
                            <Page
                                title={i18n._('Keyboard Shortcuts')}
                                description={i18n._(
                                    'Configure your keyboard shortcuts for various actions',
                                )}
                                withGoBackButton
                                withFullPadding
                            >
                                <KeyboardShortcuts />
                            </Page>
                        }
                    />
                    <Route
                        path="movement-tuning"
                        element={
                            <Page
                                title={i18n._('Movement Tuning')}
                                withGoBackButton
                                withFixedArea
                            >
                                <MovementTuning />
                            </Page>
                        }
                    />
                    <Route
                        path="squaring"
                        element={
                            <Page
                                title={i18n._('XY Squaring')}
                                withGoBackButton
                                withFixedArea
                            >
                                <Squaring />
                            </Page>
                        }
                    />
                    <Route
                        path="surfacing"
                        element={
                            <Page
                                title={i18n._('Wasteboard Surfacing')}
                                withGoBackButton
                                withFixedArea
                            >
                                <Surfacing />
                            </Page>
                        }
                    />
                    <Route
                        path="rotary-surfacing"
                        element={
                            <Page
                                title={i18n._('Rotary Surfacing')}
                                withGoBackButton
                                withFixedArea
                            >
                                <RotarySurfacing />
                            </Page>
                        }
                    />
                    <Route
                        path="gamepad"
                        element={
                            <Page
                                title={i18n._('Gamepad')}
                                description={i18n._('Manage your gamepad profiles here')}
                                withGoBackButton
                                withFixedArea
                            >
                                <Gamepad />
                            </Page>
                        }
                    />
                    <Route
                        path="gamepad/:gamepadProfileId"
                        element={<Profile />}
                    />
                    <Route
                        path="firmware"
                        element={
                            <Page
                                title={i18n._('Firmware (Legacy)')}
                                withGoBackButton
                                withFixedArea
                            >
                                <div className="flex justify-center items-center flex-col h-[599px] xl:h-[650px]">
                                    <Firmware />
                                </div>
                            </Page>
                        }
                    />
                </Route>
                <Route path="stats" element={<StatParent />}>
                    <Route index element={<Stats />} />
                    <Route path="alarms" element={<Alarms />} />
                    <Route path="jobs" element={<Jobs />} />
                    <Route path="maintenance" element={<Maintenance />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Route>
            <Route
                path="console"
                element={<Console isActive={true} isChildWindow={true} />}
            ></Route>
            <Route
                path="remote"
                element={
                    <div className="flex flex-col gap-2">
                        <TopBar />
                        <ConfirmationDialog />
                        <div className="flex flex-col gap-8 min-h-screen p-4">
                            <Outlet />
                        </div>

                        <BottomNav />
                    </div>
                }
            >
                <Route
                    index
                    element={
                        <>
                            <WorkspaceSelector />
                            <DRO isRemote />
                            <Jogging />
                        </>
                    }
                />
                <Route
                    path="info"
                    element={
                        <div className="flex flex-col justify-center gap-8 p-4">
                            <div>
                                <MachineInfoDisplay
                                    pinned={true}
                                    setPinned={noop}
                                />
                            </div>

                            <div>
                                <NotificationDisplay />
                            </div>
                        </div>
                    }
                />
                <Route
                    path="tools"
                    element={
                        <>
                            <RemoteWidget label={i18n._('Probe')}>
                                <Probe />
                            </RemoteWidget>
                            <RemoteWidget label={i18n._('Macros')}>
                                <Macros />
                            </RemoteWidget>
                            <RemoteWidget label={i18n._('Spindle')}>
                                <Spindle />
                            </RemoteWidget>
                            <RemoteWidget label={i18n._('Coolant')}>
                                <Coolant />
                            </RemoteWidget>
                            <RemoteWidget label={i18n._('Rotary')}>
                                <Rotary />
                            </RemoteWidget>
                        </>
                    }
                />
                <Route
                    path="workflow"
                    element={
                        <div className="flex flex-col gap-48 mt-6">
                            <FileControl />
                            <JobControl />
                        </div>
                    }
                />
            </Route>
        </Routes>
    );
};
