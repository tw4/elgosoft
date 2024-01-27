import { FC } from "react";

interface HomePageStepCardProps {
  stepIconUrl: string;
  stepTitle: string;
  stepImageUrl: string;
  stepDescription: string;
}

export const HomePageStepCard: FC<HomePageStepCardProps> = ({
  stepDescription,
  stepTitle,
  stepImageUrl,
  stepIconUrl,
}) => {
  return (
    <div className="text-center space-y-3">
      <img className="m-auto" src={stepIconUrl} alt="icon" />
      <h5 className="text-2xl font-bold text-blue-500  h-[130px]">
        {stepTitle}
      </h5>
      <img
        className="m-auto h-[137px] rounded-full"
        src={stepImageUrl}
        alt="icon"
      />
      <p>{stepDescription}</p>
    </div>
  );
};
