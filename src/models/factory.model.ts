import { Column, DataType, Model, Table } from "sequelize-typescript";

interface FactoryCreationAttre {
  fac_number: number;
  fac_name: string;
  fac_addres: string;
  fac_dir_fio: string;
}

@Table({ tableName: "factory" })
export class Factory extends Model<Factory, FactoryCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  fac_number: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  fac_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  fac_address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  fac_dir_fio: string;
}
