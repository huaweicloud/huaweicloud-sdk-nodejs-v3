

export class CustomCertsResource {
    public id?: string;
    public fileName?: string;
    public fileLocation?: string;
    public status?: string;
    public updateAt?: string;
    public constructor() { 
    }
    public withId(id: string): CustomCertsResource {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): CustomCertsResource {
        this['fileName'] = fileName;
        return this;
    }
    public withFileLocation(fileLocation: string): CustomCertsResource {
        this['fileLocation'] = fileLocation;
        return this;
    }
    public withStatus(status: string): CustomCertsResource {
        this['status'] = status;
        return this;
    }
    public withUpdateAt(updateAt: string): CustomCertsResource {
        this['updateAt'] = updateAt;
        return this;
    }
}