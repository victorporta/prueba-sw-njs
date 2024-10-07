export class CoreModel {
	public static model;

	constructor(prisma){
        CoreModel.model =prisma;
	}
    public static async delete(params){
        return  this.model.delete({...params});
    }
    
    public static async deleteMany(params){
        return  this.model.deleteMany({...params});
    }
    public static async createMany(params){
        return  this.model.createMany({...params});
    }
    public static async update(params){
        return  this.model.update({...params});
    }
    public static async create(params){
        return  this.model.create({...params});
    }
    public static async findOne(params){
        try {
        return this.model.findFirst({...params})
    }catch (e) {

        throw new Error(e.message);
    }
}
	public static async findMany(params){

        try {
            return  this.model.findMany({...params});
        }catch (e) {

            throw new Error(e.message);
        }

    }    
}
