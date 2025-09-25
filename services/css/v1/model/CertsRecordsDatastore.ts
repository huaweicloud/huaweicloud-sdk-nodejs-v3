

export class CertsRecordsDatastore {
    public id?: string;
    public status?: string;
    public fileLocation?: string;
    public fileName?: boolean;
    public updateAt?: boolean;
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
    public withFileName(fileName: boolean): CertsRecordsDatastore {
        this['fileName'] = fileName;
        return this;
    }
    public withUpdateAt(updateAt: boolean): CertsRecordsDatastore {
        this['updateAt'] = updateAt;
        return this;
    }
}