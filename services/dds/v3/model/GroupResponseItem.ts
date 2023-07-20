import { NodeItem } from './NodeItem';
import { Volume } from './Volume';


export class GroupResponseItem {
    public type?: string;
    public id?: string;
    public name?: string;
    public status?: string;
    public volume?: Volume;
    public nodes?: Array<NodeItem>;
    public constructor(type?: string, id?: string, name?: string, status?: string, volume?: Volume, nodes?: Array<NodeItem>) { 
        this['type'] = type;
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['volume'] = volume;
        this['nodes'] = nodes;
    }
    public withType(type: string): GroupResponseItem {
        this['type'] = type;
        return this;
    }
    public withId(id: string): GroupResponseItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupResponseItem {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): GroupResponseItem {
        this['status'] = status;
        return this;
    }
    public withVolume(volume: Volume): GroupResponseItem {
        this['volume'] = volume;
        return this;
    }
    public withNodes(nodes: Array<NodeItem>): GroupResponseItem {
        this['nodes'] = nodes;
        return this;
    }
}