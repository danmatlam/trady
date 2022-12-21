import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ShareButton from "./ShareButton";

export type Props = {};

const ShareForm: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [emails, setEmails] = useState<string>(
    "danielarelam@gmail.com,hola@ecudevs.com"
  );
  const [uiEmails, setUiEmails] = useState<string[]>();

  useEffect(() => {
    const parts = emails?.split(",");
    setUiEmails(parts);
  }, [emails]);

  const handleRemoveEmail = (email: string) => {
    const newEmails = uiEmails?.filter((e) => e !== email);
    setUiEmails(newEmails);
    setEmails(newEmails?.join(",") + "");
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddEmail = () => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  };

  const [transitonClass, setTransitonClass] =
    useState<string>("card_animation_0");

  useEffect(() => {
    if (open == true) {
      setTimeout(() => {
        setTransitonClass("card_animation_1");
      }, 100);
      return;
    }
    setTransitonClass("card_animation_0");
  }, [open]);

  return (
    <>
      <ShareButton setOpen={setOpen} />
      <div
        className={`
        w-full h-full fixed top-0 right-0 flex flex-col justify-center items-center bg-black bg-opacity-60
        ${open ? "block" : "hidden"}
      `}
      >
        <div
          className={`min-h-1/2 bg-white rounded-xl ${transitonClass} w-11/12 sm:w-2/3 md:w-1/2`}
        >
          <div className="border-b-2 border-gray-100 font-semibold text-slate-800 text-lg flex justify-between items-center py-3 px-4">
            <h1>Share Dns</h1>
            <span className="p-1 cursor-pointer" onClick={() => setOpen(false)}>
              ×
            </span>
          </div>
          <div className="py-3 px-4 flex flex-col gap-4">
            <div className="flex column gap-3 flex-col">
              <label htmlFor="url">Direct Link</label>
              <div className="flex items-center align-middle justify-between gap-2 bg-gray-100 p-2 rounded-lg">
                <input
                  name="url"
                  id="url"
                  type="text"
                  className="form-input w-full flex bg-gray-100 p-2 text-gray-400"
                  value="trady.dev/dns/1"
                  disabled
                />
                <button
                  className="app-green text-white hover:bg-cyan-900  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="flex column gap-3 flex-col ">
              <label htmlFor="emails">Send as an email invited</label>
              <div className="relative h-24">
                <div
                  className={`
                bg-gray400 p-2 
                flex gap-3 flex-wrap 
                w-full h-24 
                border-2 
                border-gray-100
                rounded-lg 
                cursor-pointer 
                absolute z-10 
                overflow-y-scroll
                hover:border-lime-800
               
                `}
                  onClick={handleAddEmail}
                >
                  {uiEmails &&
                    uiEmails.length > 0 &&
                    uiEmails.map((email) => (
                      <div
                        key={email}
                        className="px-3 py-2 h-12 rounded-lg flex gap-1 items-center justify-between "
                        style={{ background: "#EDF2EA" }}
                        onClick={() => handleRemoveEmail(email)}
                      >
                        <span>{email}</span>
                        <span className="p-1 cursor-pointer">×</span>
                      </div>
                    ))}
                </div>

                <div className="flex items-center align-middle justify-between gap-2 bg-gray-100 p-2 rounded-lg opacity-0">
                  <input
                    ref={inputRef}
                    name="emails"
                    id="emails"
                    type="text"
                    className="form-input w-full flex bg-gray-100 p-2"
                    placeholder="Write emails separated by commas"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full ">
              <button
                className="app-green text-white hover:bg-cyan-900  text-sm px-4 py-6 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
                type="button"
              >
                Send Invited
              </button>
            </div>

            <div className="flex items-center justify-center w-full gap-2">
              <button className="w-9 h-9 rounded-full border-2 border-gray-200 flex justify-center items-center">
                <Image
                  src="/brands/facebook.svg"
                  alt="facebook social media logo"
                  width={21}
                  height={21}
                />
              </button>
              <button className="w-9 h-9 rounded-full border-2 border-gray-200 flex justify-center items-center">
                <Image
                  src="/brands/twitter.svg"
                  alt="twitter social media logo"
                  width={21}
                  height={21}
                />
              </button>
              <button className="w-9 h-9 rounded-full border-2 border-gray-200 flex justify-center items-center">
                <Image
                  src="/brands/github.svg"
                  alt="github social media logo"
                  width={21}
                  height={21}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareForm;
