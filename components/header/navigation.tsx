import Link from "next/link";

type Props = {
  isMobileView: boolean;
  setIsOpen: any;
};

const Navigation: React.FC<Props> = (props: Props) => {
  const { isMobileView, setIsOpen } = props;

  return (
    <nav className={isMobileView ? "px-8" : "hidden md:block w-full"}>
      <div
        className={`flex md:items-center list-unstyled mb-0 justify-between ml-3 ${isMobileView ? "flex-col" : ""
          }`}
      >
        <ul className={`${isMobileView ? "" : "flex items-center gap-2"}`}>
          <li
            className={
              isMobileView ? "pb-5 border-b border-gray-300 mt-8" : "px-8"
            }
          >
            <Link href="/#home">
              <p
                className={`${isMobileView ? "text-white uppercase" : "py-2 text-white "
                  } text-decoration-none xl:text-sm text-xs hover:border-b-2 ease-in-out duration-100`}
                onClick={() => {
                  isMobileView && setIsOpen(false);
                }}
              >
                HOME
              </p>
            </Link>
          </li>
          <li
            className={
              isMobileView ? "pb-5 border-b border-gray-300 mt-8" : "px-8"
            }
          >
            <Link href="/#games">
              <p
                className={`${isMobileView ? "text-white uppercase" : "py-2 text-white"
                  } text-decoration-none xl:text-sm text-xs hover:border-b-2 ease-in-out duration-100`}
                onClick={() => {
                  isMobileView && setIsOpen(false);
                }}
              >
                GAMES
              </p>
            </Link>
          </li>
            <li
                className={
                    isMobileView ? "pb-5 border-b border-gray-300 mt-8" : "px-8"
                }
            >
                <Link href="/#news">
                    <p
                        className={`${isMobileView ? "text-white uppercase" : "py-2 text-white"
                        } text-decoration-none xl:text-sm text-xs hover:border-b-2 ease-in-out duration-100`}
                        onClick={() => {
                            isMobileView && setIsOpen(false);
                        }}
                    >
                        NEWS
                    </p>
                </Link>
            </li>
          <li
            className={
              isMobileView ? "pb-5 border-b border-gray-300 mt-8" : "px-8"
            }
          >
            <Link href="/#about">
              <p
                className={`${isMobileView ? "text-white uppercase" : "py-2 text-white"
                  } text-decoration-none xl:text-sm text-xs hover:border-b-2 ease-in-out duration-100`}
                onClick={() => {
                  isMobileView && setIsOpen(false);
                }}
              >
                ABOUT
              </p>
            </Link>
          </li>
          <li
            className={
              isMobileView ? "pb-5 border-b border-gray-300 mt-8" : "px-8"
            }
          >
            <Link href="/#FollowUs">
              <p
                className={`${isMobileView ? "text-white uppercase" : "py-2 text-white  "
                  } text-decoration-none xl:text-sm text-xs hover:border-b-2 ease-in-out duration-100`}
                onClick={() => {
                  isMobileView && setIsOpen(false);
                }}
              >
                FOLLOW US
              </p>
            </Link>
          </li>
          <li
            className={
              isMobileView ? "pb-5 border-b border-gray-300 mt-8" : "px-8 "
            }
          >
            <Link href="/#ContactUs">
              <p
                className={`${isMobileView ? "text-white uppercase" : "py-2 text-white"
                  } text-decoration-none xl:text-sm text-xs hover:border-b-2 ease-in-out duration-100`}
                onClick={() => {
                  isMobileView && setIsOpen(false);
                }}
              >
                CONTACT US
              </p>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
