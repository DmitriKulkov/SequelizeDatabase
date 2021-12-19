import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Department } from "./department.model";
import { Technology } from "./technology.model";

interface ProductCreationAttre {
  prod_code: number;
  fac_number: number;
  dep_number: number;
  prod_name: string;
  prod_purpose: string;
  prod_weight: number;
  prod_tech_code: number;
}

@Table({ tableName: "product" })
export class Product extends Model<Product, ProductCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  prod_code: number;

  @ForeignKey(() => Department)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  fac_number: number;

  @ForeignKey(() => Department)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  dep_number: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  prod_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  prod_purpose: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  prod_weight: number;

  @ForeignKey(() => Technology)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  prod_tech_code: number;
}
