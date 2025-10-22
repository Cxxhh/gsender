import { FaTasks } from 'react-icons/fa';
import { RiToolsFill } from 'react-icons/ri';
import { IoSpeedometerOutline } from 'react-icons/io5';
import cx from 'classnames';

import Carve from './assets/Carve.svg';
import { NavbarLink } from './components/NavbarLink.tsx';
import i18n from 'app/lib/i18n';

export const NavBar = () => {
    return (
        <>
            <div
                className={cx(
                    'grid [grid-template-rows:minmax(0,30%)_auto_auto] gap-0 justify-end flex-grow self-stretch',
                )}
            >
                <div className="py-5 border-gray-400 border-r-2 dark:border-gray-700"></div>
                <NavbarLink
                    href="/"
                    svg={Carve}
                    label={i18n._('Carve')}
                />
                <NavbarLink
                    href="stats"
                    icon={IoSpeedometerOutline}
                    label={i18n._('Stats')}
                />
                <NavbarLink
                    href="tools"
                    icon={RiToolsFill}
                    label={i18n._('Tools')}
                />

                <NavbarLink
                    href="configuration"
                    icon={FaTasks}
                    label={i18n._('Config')}
                />
            </div>
        </>
    );
};
