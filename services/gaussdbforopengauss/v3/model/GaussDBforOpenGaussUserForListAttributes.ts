

export class GaussDBforOpenGaussUserForListAttributes {
    public rolsuper?: boolean;
    public rolinherit?: boolean;
    public rolcreaterole?: boolean;
    public rolcreatedb?: boolean;
    public rolcanlogin?: boolean;
    public rolconnlimit?: number;
    public rolreplication?: boolean;
    public rolbypassrls?: boolean;
    public constructor() { 
    }
    public withRolsuper(rolsuper: boolean): GaussDBforOpenGaussUserForListAttributes {
        this['rolsuper'] = rolsuper;
        return this;
    }
    public withRolinherit(rolinherit: boolean): GaussDBforOpenGaussUserForListAttributes {
        this['rolinherit'] = rolinherit;
        return this;
    }
    public withRolcreaterole(rolcreaterole: boolean): GaussDBforOpenGaussUserForListAttributes {
        this['rolcreaterole'] = rolcreaterole;
        return this;
    }
    public withRolcreatedb(rolcreatedb: boolean): GaussDBforOpenGaussUserForListAttributes {
        this['rolcreatedb'] = rolcreatedb;
        return this;
    }
    public withRolcanlogin(rolcanlogin: boolean): GaussDBforOpenGaussUserForListAttributes {
        this['rolcanlogin'] = rolcanlogin;
        return this;
    }
    public withRolconnlimit(rolconnlimit: number): GaussDBforOpenGaussUserForListAttributes {
        this['rolconnlimit'] = rolconnlimit;
        return this;
    }
    public withRolreplication(rolreplication: boolean): GaussDBforOpenGaussUserForListAttributes {
        this['rolreplication'] = rolreplication;
        return this;
    }
    public withRolbypassrls(rolbypassrls: boolean): GaussDBforOpenGaussUserForListAttributes {
        this['rolbypassrls'] = rolbypassrls;
        return this;
    }
}