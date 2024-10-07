import { CoreModel } from "@src/database/coreModel";
const {prisma} = require("@src/database/prisma");

export class PeopleModel extends CoreModel {
    public static model = prisma.people;
	constructor() {
		super(prisma.user);
	}
	public static self(){
		return {
			id: true,
			birth_year: true,
			eye_color: false,
			gender: true,
			hair_color: true
		}
	}
    public static async getData(params){
        return await this.findMany(params);
    }
    public static async saveData(params){
        return await this.create(params);
    }
}