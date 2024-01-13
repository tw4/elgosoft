
import styles from "./ServicesCard.module.css";
import { FC } from "react";

interface ServicesCardProps {
  title: string;
  description: string;
  image: string;
}

export const ServicesCard: FC<ServicesCardProps> = ({
                                                      image,
                                                      description,
                                                      title,
                                                    }) => {
  return (
    <div className={styles.servicesCard}>
      <img src={image} height={50} width={50} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
