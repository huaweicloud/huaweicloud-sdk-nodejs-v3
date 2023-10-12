

export class DefaultCertsResource {
    public fileName?: string;
    public fileLocation?: string;
    public status?: string;
    public column?: string;
    public desc?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): DefaultCertsResource {
        this['fileName'] = fileName;
        return this;
    }
    public withFileLocation(fileLocation: string): DefaultCertsResource {
        this['fileLocation'] = fileLocation;
        return this;
    }
    public withStatus(status: string): DefaultCertsResource {
        this['status'] = status;
        return this;
    }
    public withColumn(column: string): DefaultCertsResource {
        this['column'] = column;
        return this;
    }
    public withDesc(desc: string): DefaultCertsResource {
        this['desc'] = desc;
        return this;
    }
}