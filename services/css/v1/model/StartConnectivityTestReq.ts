import { AddressAndPorts } from './AddressAndPorts';


export class StartConnectivityTestReq {
    public addressAndPorts?: Array<AddressAndPorts>;
    public constructor(addressAndPorts?: Array<AddressAndPorts>) { 
        this['addressAndPorts'] = addressAndPorts;
    }
    public withAddressAndPorts(addressAndPorts: Array<AddressAndPorts>): StartConnectivityTestReq {
        this['addressAndPorts'] = addressAndPorts;
        return this;
    }
}