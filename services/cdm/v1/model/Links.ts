import { LinksLinkconfigvalues } from './LinksLinkconfigvalues';


export class Links {
    private 'link-config-values'?: LinksLinkconfigvalues;
    private 'creation-user'?: string;
    public name?: string;
    public id?: number;
    private 'creation-date'?: number;
    private 'connector-name'?: string;
    private 'update-date'?: number;
    public enabled?: boolean;
    private 'update-user'?: string;
    public constructor(linkConfigValues?: LinksLinkconfigvalues, name?: string, connectorName?: string) { 
        this['link-config-values'] = linkConfigValues;
        this['name'] = name;
        this['connector-name'] = connectorName;
    }
    public withLinkConfigValues(linkConfigValues: LinksLinkconfigvalues): Links {
        this['link-config-values'] = linkConfigValues;
        return this;
    }
    public set linkConfigValues(linkConfigValues: LinksLinkconfigvalues  | undefined) {
        this['link-config-values'] = linkConfigValues;
    }
    public get linkConfigValues(): LinksLinkconfigvalues | undefined {
        return this['link-config-values'];
    }
    public withCreationUser(creationUser: string): Links {
        this['creation-user'] = creationUser;
        return this;
    }
    public set creationUser(creationUser: string  | undefined) {
        this['creation-user'] = creationUser;
    }
    public get creationUser(): string | undefined {
        return this['creation-user'];
    }
    public withName(name: string): Links {
        this['name'] = name;
        return this;
    }
    public withId(id: number): Links {
        this['id'] = id;
        return this;
    }
    public withCreationDate(creationDate: number): Links {
        this['creation-date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: number  | undefined) {
        this['creation-date'] = creationDate;
    }
    public get creationDate(): number | undefined {
        return this['creation-date'];
    }
    public withConnectorName(connectorName: string): Links {
        this['connector-name'] = connectorName;
        return this;
    }
    public set connectorName(connectorName: string  | undefined) {
        this['connector-name'] = connectorName;
    }
    public get connectorName(): string | undefined {
        return this['connector-name'];
    }
    public withUpdateDate(updateDate: number): Links {
        this['update-date'] = updateDate;
        return this;
    }
    public set updateDate(updateDate: number  | undefined) {
        this['update-date'] = updateDate;
    }
    public get updateDate(): number | undefined {
        return this['update-date'];
    }
    public withEnabled(enabled: boolean): Links {
        this['enabled'] = enabled;
        return this;
    }
    public withUpdateUser(updateUser: string): Links {
        this['update-user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update-user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update-user'];
    }
}