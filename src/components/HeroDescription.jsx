import AnimatedTextCharacter from "@/components/AnimatedText";
import Button from "./Buttons";
import { useThemeContext } from "@/context/themeContext";

export default function HeroDescription({
  title,
  animatedHeading,
  desc,
  modalAction,
}) {
  const { theme } = useThemeContext();

  return (
    <>
      <span data-aos="fade-up" className="heading-1 h2">
        {title && title}
        <span className="block">
          <AnimatedTextCharacter text={animatedHeading && animatedHeading} />
        </span>
      </span>
      {desc && (
        <p
          data-aos="fade-up"
          data-delay="500"
          className={`${
            theme === "light" ? null : "sm:max-w-[70%] mx-auto"
          }  first-letter:capitalize`}
          dangerouslySetInnerHTML={{ __html: desc && desc }}
        />
      )}
      <div className="mt-3 flex items-center">
        {modalAction && (
          <Button
            size="normal"
            label="Let's start"
            icon={true}
            action={modalAction}
            classes={`${theme === "light" ? null : "mx-auto"}`}
          />
        )}
      </div>
    </>
  );
}
