import { AddressAndPorts } from './AddressAndPorts';


export class StartConnectivityTestReq {
    private 'address_and_ports'?: Array<AddressAndPorts>;
    public constructor(addressAndPorts?: Array<AddressAndPorts>) { 
        this['address_and_ports'] = addressAndPorts;
    }
    public withAddressAndPorts(addressAndPorts: Array<AddressAndPorts>): StartConnectivityTestReq {
        this['address_and_ports'] = addressAndPorts;
        return this;
    }
    public set addressAndPorts(addressAndPorts: Array<AddressAndPorts>  | undefined) {
        this['address_and_ports'] = addressAndPorts;
    }
    public get addressAndPorts(): Array<AddressAndPorts> | undefined {
        return this['address_and_ports'];
    }
}