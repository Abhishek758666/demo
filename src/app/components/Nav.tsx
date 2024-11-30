import { FiArrowRight } from "react-icons/fi";
import { SiSpacex } from "react-icons/si";

const Nav = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 backdrop-blur-sm border-b flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl relative mix-blend-multiply" />
      <button
        onClick={handleScrollToBottom}
        className="flex items-center relative mix-blend-multiply  gap-1 text-xs text-zinc-900"
      >
        HIRE ME <FiArrowRight />
      </button>
    </nav>
  );
};

export default Nav;
