

export class PostgresqlDatabaseForCreation {
    public name?: string;
    private 'character_set'?: string;
    public owner?: string;
    public template?: string;
    private 'lc_collate'?: string;
    private 'lc_ctype'?: string;
    private 'is_revoke_public_privilege'?: boolean;
    public comment?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): PostgresqlDatabaseForCreation {
        this['name'] = name;
        return this;
    }
    public withCharacterSet(characterSet: string): PostgresqlDatabaseForCreation {
        this['character_set'] = characterSet;
        return this;
    }
    public set characterSet(characterSet: string  | undefined) {
        this['character_set'] = characterSet;
    }
    public get characterSet(): string | undefined {
        return this['character_set'];
    }
    public withOwner(owner: string): PostgresqlDatabaseForCreation {
        this['owner'] = owner;
        return this;
    }
    public withTemplate(template: string): PostgresqlDatabaseForCreation {
        this['template'] = template;
        return this;
    }
    public withLcCollate(lcCollate: string): PostgresqlDatabaseForCreation {
        this['lc_collate'] = lcCollate;
        return this;
    }
    public set lcCollate(lcCollate: string  | undefined) {
        this['lc_collate'] = lcCollate;
    }
    public get lcCollate(): string | undefined {
        return this['lc_collate'];
    }
    public withLcCtype(lcCtype: string): PostgresqlDatabaseForCreation {
        this['lc_ctype'] = lcCtype;
        return this;
    }
    public set lcCtype(lcCtype: string  | undefined) {
        this['lc_ctype'] = lcCtype;
    }
    public get lcCtype(): string | undefined {
        return this['lc_ctype'];
    }
    public withIsRevokePublicPrivilege(isRevokePublicPrivilege: boolean): PostgresqlDatabaseForCreation {
        this['is_revoke_public_privilege'] = isRevokePublicPrivilege;
        return this;
    }
    public set isRevokePublicPrivilege(isRevokePublicPrivilege: boolean  | undefined) {
        this['is_revoke_public_privilege'] = isRevokePublicPrivilege;
    }
    public get isRevokePublicPrivilege(): boolean | undefined {
        return this['is_revoke_public_privilege'];
    }
    public withComment(comment: string): PostgresqlDatabaseForCreation {
        this['comment'] = comment;
        return this;
    }
}