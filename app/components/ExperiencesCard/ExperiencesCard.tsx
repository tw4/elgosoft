import { FC } from "react";
import styles from "./ExperiencesCard.module.css";

interface ExperiencesCardProps {
  value: string;
  description: string;
}

export const ExperiencesCard: FC<ExperiencesCardProps> = ({ description, value, }) => {
  return (
    <div className={styles.experiencesCardContainer}>
      <h1 className={styles.experiencesCardH1}>{value}</h1>
      <p className={styles.experiencesCardP}>{description}</p>
    </div>
  );
};
