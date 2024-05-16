import { Tag } from './Tag';


export class ResourceShare {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'allow_external_principals'?: boolean;
    private 'owning_account_id'?: string;
    public status?: string;
    public tags?: Array<Tag>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, name?: string, description?: string, owningAccountId?: string, status?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['owning_account_id'] = owningAccountId;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): ResourceShare {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResourceShare {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ResourceShare {
        this['description'] = description;
        return this;
    }
    public withAllowExternalPrincipals(allowExternalPrincipals: boolean): ResourceShare {
        this['allow_external_principals'] = allowExternalPrincipals;
        return this;
    }
    public set allowExternalPrincipals(allowExternalPrincipals: boolean  | undefined) {
        this['allow_external_principals'] = allowExternalPrincipals;
    }
    public get allowExternalPrincipals(): boolean | undefined {
        return this['allow_external_principals'];
    }
    public withOwningAccountId(owningAccountId: string): ResourceShare {
        this['owning_account_id'] = owningAccountId;
        return this;
    }
    public set owningAccountId(owningAccountId: string  | undefined) {
        this['owning_account_id'] = owningAccountId;
    }
    public get owningAccountId(): string | undefined {
        return this['owning_account_id'];
    }
    public withStatus(status: string): ResourceShare {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<Tag>): ResourceShare {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: Date): ResourceShare {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ResourceShare {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}