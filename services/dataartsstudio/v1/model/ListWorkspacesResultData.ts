import { ListWorkspacesResultDataValue } from './ListWorkspacesResultDataValue';


export class ListWorkspacesResultData {
    public value?: ListWorkspacesResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListWorkspacesResultDataValue): ListWorkspacesResultData {
        this['value'] = value;
        return this;
    }
}