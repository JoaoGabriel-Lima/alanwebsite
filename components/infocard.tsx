interface InfoCardProps {
  children: React.ReactNode;
  image: string;
  isOnLeft: boolean;
}

const InfoCard = ({ children, image, isOnLeft }: InfoCardProps) => {
  return (
    <div
      className={`bg-[#7f1d1d] ${
        isOnLeft ? "lg:ml-[120px]" : "lg:mr-[120px] "
      } rounded-3xl my-[90px] lg:my-14 px-10 py-10 relative items-center flex lg:flex-row flex-col`}
    >
      <img
        alt=""
        src={image}
        className={`absolute top-[-130px] lg:top-auto ${
          isOnLeft ? "lg:left-[-120px]" : "lg:right-[-120px]"
        }  w-[200px] lg:w-[280px]`}
      ></img>
      <div
        className={`flex flex-col lg:mt-0 mt-16 lg:max-w-[700px] lg:items-start items-center ${
          isOnLeft ? "lg:ml-[145px]" : "lg:mr-[145px]"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
