import { AutoAssociateRouteEnabled } from './AutoAssociateRouteEnabled';
import { AutoPropagateRouteEnabled } from './AutoPropagateRouteEnabled';
import { CentralNetworkConnectionInfo } from './CentralNetworkConnectionInfo';
import { CentralNetworkDefaultPlaneId } from './CentralNetworkDefaultPlaneId';
import { CentralNetworkErInstance } from './CentralNetworkErInstance';
import { CentralNetworkPlane } from './CentralNetworkPlane';
import { CentralNetworkState } from './CentralNetworkState';
import { CentralNetworkStateEnum } from './CentralNetworkStateEnum';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { Name } from './Name';
import { Tag } from './Tag';
import { Tags } from './Tags';
import { UUID64Identifier } from './UUID64Identifier';
import { UpdatedAt } from './UpdatedAt';


export class CentralNetwork {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'domain_id'?: string;
    public state?: CentralNetworkStateEnum;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'default_plane_id'?: string;
    public planes?: Array<CentralNetworkPlane>;
    private 'er_instances'?: Array<CentralNetworkErInstance>;
    public connections?: Array<CentralNetworkConnectionInfo>;
    public constructor(id?: string, name?: string, createdAt?: Date, updatedAt?: Date, domainId?: string, state?: CentralNetworkStateEnum, defaultPlaneId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['domain_id'] = domainId;
        this['state'] = state;
        this['default_plane_id'] = defaultPlaneId;
    }
    public withId(id: string): CentralNetwork {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CentralNetwork {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CentralNetwork {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): CentralNetwork {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CentralNetwork {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): CentralNetwork {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withState(state: CentralNetworkStateEnum): CentralNetwork {
        this['state'] = state;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CentralNetwork {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CentralNetwork {
        this['tags'] = tags;
        return this;
    }
    public withDefaultPlaneId(defaultPlaneId: string): CentralNetwork {
        this['default_plane_id'] = defaultPlaneId;
        return this;
    }
    public set defaultPlaneId(defaultPlaneId: string  | undefined) {
        this['default_plane_id'] = defaultPlaneId;
    }
    public get defaultPlaneId(): string | undefined {
        return this['default_plane_id'];
    }
    public withPlanes(planes: Array<CentralNetworkPlane>): CentralNetwork {
        this['planes'] = planes;
        return this;
    }
    public withErInstances(erInstances: Array<CentralNetworkErInstance>): CentralNetwork {
        this['er_instances'] = erInstances;
        return this;
    }
    public set erInstances(erInstances: Array<CentralNetworkErInstance>  | undefined) {
        this['er_instances'] = erInstances;
    }
    public get erInstances(): Array<CentralNetworkErInstance> | undefined {
        return this['er_instances'];
    }
    public withConnections(connections: Array<CentralNetworkConnectionInfo>): CentralNetwork {
        this['connections'] = connections;
        return this;
    }
}