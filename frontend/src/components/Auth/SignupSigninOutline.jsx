import SplitText from "../Animation/SplitText";
import SquaresBg from "../Animation/AnimationBg";
import Logo from "../Logo/Logo";

const SignupSigninOutline = ({ children, headline }) => {
  return (
    <SquaresBg>
      <main
        className="px-[60px] py-[30px] w-[450px] rounded-[10px] bg-[rgba(255,255,255,0.126)] 
        backdrop-blur-md border border-[rgba(255,255,255,0.177)] shadow-[0_8px_32px_0_rgba(131,131,139,0.32)]
        "
      >
        <header className="flex flex-col items-center justify-center mb-7">
          <Logo size={45} />
          <SplitText
            text={headline}
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </header>
        {children}
      </main>
    </SquaresBg>
  );
};

export default SignupSigninOutline;
