import Typewriter from "typewriter-effect";

function Wishsection() {
  const backgroundImage = new URL('../../public/4.png', import.meta.url).href;

  return (
    <>
      <div className="h-screen bg-[#023047] flex flex-col items-center justify-center">
        <h3 className="font-mukta text-[#8ECAE6] text-6xl font-semibold m-8 max-sm:text-3xl">
          🎊 FELIZ CUMPLE ✨
        </h3>

        <div
          className="w-[349px] h-[314px] rounded max-sm:w-[225px] max-sm:h-[250px] bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <h1 className="font-mukta text-white text-8xl font-bold m-5 max-sm:text-4xl">
          <Typewriter
            options={{
              strings: [
                '<span style="color: #29E7CD;">Lore </span>',
                ' <span style="color: #F0F0C9;">Lorena</span>',
                '<span style="color: #D4F5F5;">Lorena</span>',
              ],
              delay: 200,
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          />
        </h1>
      </div>
    </>
  );
}

export default Wishsection;
