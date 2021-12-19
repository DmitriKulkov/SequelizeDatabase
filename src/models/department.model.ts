import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Factory } from "./factory.model";

interface DepartmentCreationAttre {
  dep_number: number;
  fac_number: number;
  dep_dir_fio: string;
}

@Table({ tableName: "department" })
export class Department extends Model<Department, DepartmentCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  dep_number: number;

  @ForeignKey(() => Factory)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  fac_number: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  dep_dir_fio: string;
}
