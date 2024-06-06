

export class GaussDBforOpenGaussUserForListAttribute {
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
    public withRolsuper(rolsuper: boolean): GaussDBforOpenGaussUserForListAttribute {
        this['rolsuper'] = rolsuper;
        return this;
    }
    public withRolinherit(rolinherit: boolean): GaussDBforOpenGaussUserForListAttribute {
        this['rolinherit'] = rolinherit;
        return this;
    }
    public withRolcreaterole(rolcreaterole: boolean): GaussDBforOpenGaussUserForListAttribute {
        this['rolcreaterole'] = rolcreaterole;
        return this;
    }
    public withRolcreatedb(rolcreatedb: boolean): GaussDBforOpenGaussUserForListAttribute {
        this['rolcreatedb'] = rolcreatedb;
        return this;
    }
    public withRolcanlogin(rolcanlogin: boolean): GaussDBforOpenGaussUserForListAttribute {
        this['rolcanlogin'] = rolcanlogin;
        return this;
    }
    public withRolconnlimit(rolconnlimit: number): GaussDBforOpenGaussUserForListAttribute {
        this['rolconnlimit'] = rolconnlimit;
        return this;
    }
    public withRolreplication(rolreplication: boolean): GaussDBforOpenGaussUserForListAttribute {
        this['rolreplication'] = rolreplication;
        return this;
    }
    public withRolbypassrls(rolbypassrls: boolean): GaussDBforOpenGaussUserForListAttribute {
        this['rolbypassrls'] = rolbypassrls;
        return this;
    }
    public withRolpassworddeadline(rolpassworddeadline: string): GaussDBforOpenGaussUserForListAttribute {
        this['rolpassworddeadline'] = rolpassworddeadline;
        return this;
    }
}