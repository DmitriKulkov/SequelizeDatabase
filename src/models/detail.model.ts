import {
  Column,
  DataType,
  ForeignKey,
  IsDate,
  Model,
  Table,
} from "sequelize-typescript";
import { Diller } from "./diller.model";
import { Product } from "./product.model";

interface DetailCreationAttre {
  det_code: number;
  det_name: string;
  prod_code: number;
  det_weight: number;
  det_size: number;
  dil_code: number;
  det_date: Date;
}

@Table({ tableName: "detail" })
export class Detail extends Model<Detail, DetailCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  det_code: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  det_name: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  prod_code: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  det_weight: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  det_size: number;

  @ForeignKey(() => Diller)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  dil_code: number;

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: false,
    unique: false,
  })
  det_date: Date;
}
