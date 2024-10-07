const URL = "https://swapi.py4e.com/api";

export class Swapi {
    private basePath: string = "";
    constructor(base: string = URL) {
        this.basePath = base;
    }
    
    clear() {
        this.basePath = URL;
        return this;
    }
    buildUrl():string {
        return this.basePath;
    }
    people(): Swapi {
        this.basePath += "/people";
        return this;
    }
    planets(): Swapi {
        this.basePath += "/planets";
        return this;
    }
    vehicles(): Swapi {
        this.basePath += "/vehicles";
        return this;
    }
    species(): Swapi {
        this.basePath += "/species";
        return this;
    }
    starships(): Swapi {
        this.basePath += "/starships";
        return this;
    }
    params(id :string|number): Swapi {
        this.basePath +="/"+id;
        return this;
    }

}