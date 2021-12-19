import { Column, DataType, Model, Table } from "sequelize-typescript";

interface DillerCreationAttre {
  dil_code: number;
  dil_name: string;
  dil_region: string;
  dil_addres: string;
  dil_dir_fio: string;
}

@Table({ tableName: "diller" })
export class Diller extends Model<Diller, DillerCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  dil_code: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  dil_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  dil_region: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  dil_addres: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  dil_dir_fio: string;
}
