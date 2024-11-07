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
      {desc  && (
        <p
          data-aos="fade-up"
          data-delay="500"
          className={`first-letter:capitalize`}
          dangerouslySetInnerHTML={{ __html: desc && desc }}
        />
      )}
      {modalAction && <div className="mt-3 flex items-center">
        
          <Button
            size="normal"
            label="Let's start"
            icon={true}
            action={modalAction}
            classes={`lg:m-0 mx-auto`}
          />
        
      </div>}
    </>
  );
}
