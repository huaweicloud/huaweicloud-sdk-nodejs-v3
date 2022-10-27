

export class EpDetail {
    public id: string;
    public name: string;
    public description: string;
    public status: number;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public type: EpDetailTypeEnum;
    public constructor(id?: any, name?: any, description?: any, status?: any, createdAt?: any, updatedAt?: any, type?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['type'] = type;
    }
    public withId(id: string): EpDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EpDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EpDetail {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): EpDetail {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): EpDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EpDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withType(type: EpDetailTypeEnum): EpDetail {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EpDetailTypeEnum {
    PROD = 'prod',
    POC = 'poc'
}
