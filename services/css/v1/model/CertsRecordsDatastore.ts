

export class CertsRecordsDatastore {
    public id?: string;
    public status?: string;
    public fileLocation?: string;
    public fileName?: string;
    public updateAt?: string;
    public constructor() { 
    }
    public withId(id: string): CertsRecordsDatastore {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): CertsRecordsDatastore {
        this['status'] = status;
        return this;
    }
    public withFileLocation(fileLocation: string): CertsRecordsDatastore {
        this['fileLocation'] = fileLocation;
        return this;
    }
    public withFileName(fileName: string): CertsRecordsDatastore {
        this['fileName'] = fileName;
        return this;
    }
    public withUpdateAt(updateAt: string): CertsRecordsDatastore {
        this['updateAt'] = updateAt;
        return this;
    }
}