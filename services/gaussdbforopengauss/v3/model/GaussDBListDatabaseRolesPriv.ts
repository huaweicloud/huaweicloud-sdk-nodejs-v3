

export class GaussDBListDatabaseRolesPriv {
    public rolsuper?: boolean;
    public rolinherit?: boolean;
    public rolcreaterole?: boolean;
    public rolcreatedb?: boolean;
    public rolcanlogin?: boolean;
    public rolconnlimit?: number;
    public rolreplication?: boolean;
    public rolbypassrls?: boolean;
    public rolpassworddeadline?: string;
    public constructor() { 
    }
    public withRolsuper(rolsuper: boolean): GaussDBListDatabaseRolesPriv {
        this['rolsuper'] = rolsuper;
        return this;
    }
    public withRolinherit(rolinherit: boolean): GaussDBListDatabaseRolesPriv {
        this['rolinherit'] = rolinherit;
        return this;
    }
    public withRolcreaterole(rolcreaterole: boolean): GaussDBListDatabaseRolesPriv {
        this['rolcreaterole'] = rolcreaterole;
        return this;
    }
    public withRolcreatedb(rolcreatedb: boolean): GaussDBListDatabaseRolesPriv {
        this['rolcreatedb'] = rolcreatedb;
        return this;
    }
    public withRolcanlogin(rolcanlogin: boolean): GaussDBListDatabaseRolesPriv {
        this['rolcanlogin'] = rolcanlogin;
        return this;
    }
    public withRolconnlimit(rolconnlimit: number): GaussDBListDatabaseRolesPriv {
        this['rolconnlimit'] = rolconnlimit;
        return this;
    }
    public withRolreplication(rolreplication: boolean): GaussDBListDatabaseRolesPriv {
        this['rolreplication'] = rolreplication;
        return this;
    }
    public withRolbypassrls(rolbypassrls: boolean): GaussDBListDatabaseRolesPriv {
        this['rolbypassrls'] = rolbypassrls;
        return this;
    }
    public withRolpassworddeadline(rolpassworddeadline: string): GaussDBListDatabaseRolesPriv {
        this['rolpassworddeadline'] = rolpassworddeadline;
        return this;
    }
}