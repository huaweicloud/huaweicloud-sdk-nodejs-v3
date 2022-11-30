import { Route } from './Route';


export class Vpc {
    public id: string;
    public name: string;
    public cidr: string;
    public description: string;
    public routes: Array<Route>;
    public status: VpcStatusEnum;
    private 'enterprise_project_id': string | undefined;
    public constructor(id?: any, name?: any, cidr?: any, description?: any, routes?: any, status?: any, enterpriseProjectId?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['cidr'] = cidr;
        this['description'] = description;
        this['routes'] = routes;
        this['status'] = status;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): Vpc {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Vpc {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): Vpc {
        this['cidr'] = cidr;
        return this;
    }
    public withDescription(description: string): Vpc {
        this['description'] = description;
        return this;
    }
    public withRoutes(routes: Array<Route>): Vpc {
        this['routes'] = routes;
        return this;
    }
    public withStatus(status: VpcStatusEnum): Vpc {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Vpc {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcStatusEnum {
    CREATING = 'CREATING',
    OK = 'OK',
    ERROR = 'ERROR'
}
