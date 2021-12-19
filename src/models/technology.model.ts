import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TechnologyCreationAttre {
  prod_tech_code: number;
  tech_description: string;
  tech_developer: string;
  tech_duration: number;
}

@Table({ tableName: "product" })
export class Technology extends Model<Technology, TechnologyCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  prod_tech_code: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  tech_description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  tech_developer: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  tech_duration: number;
}
