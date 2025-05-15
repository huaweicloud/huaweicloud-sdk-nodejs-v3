

export class CentralNetworkElementChange {
    private 'operation_id'?: CentralNetworkElementChangeOperationIdEnum | string;
    public constructor(operationId?: string) { 
        this['operation_id'] = operationId;
    }
    public withOperationId(operationId: CentralNetworkElementChangeOperationIdEnum | string): CentralNetworkElementChange {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: CentralNetworkElementChangeOperationIdEnum | string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): CentralNetworkElementChangeOperationIdEnum | string | undefined {
        return this['operation_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CentralNetworkElementChangeOperationIdEnum {
    CREATECENTRALNETWORKPLANE = 'CreateCentralNetworkPlane',
    DELETECENTRALNETWORKPLANE = 'DeleteCentralNetworkPlane',
    UPDATECENTRALNETWORKPLANE = 'UpdateCentralNetworkPlane',
    CREATECENTRALNETWORKERINSTANCE = 'CreateCentralNetworkErInstance',
    DELETECENTRALNETWORKERINSTANCE = 'DeleteCentralNetworkErInstance',
    CREATECENTRALNETWORKERCONNECTION = 'CreateCentralNetworkErConnection',
    DELETECENTRALNETWORKERCONNECTION = 'DeleteCentralNetworkErConnection',
    CREATECENTRALNETWORKERTABLE = 'CreateCentralNetworkErTable',
    DELETECENTRALNETWORKERTABLE = 'DeleteCentralNetworkErTable',
    SWITCHCENTRALNETWORKERTABLE = 'SwitchCentralNetworkErTable'
}
