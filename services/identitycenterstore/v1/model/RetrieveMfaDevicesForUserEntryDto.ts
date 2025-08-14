import { MfaDeviceDto } from './MfaDeviceDto';
import { RetrieveMfaDevicesForUserDto } from './RetrieveMfaDevicesForUserDto';


export class RetrieveMfaDevicesForUserEntryDto {
    private 'mfa_devices'?: Array<MfaDeviceDto>;
    public user?: RetrieveMfaDevicesForUserDto;
    public constructor(mfaDevices?: Array<MfaDeviceDto>, user?: RetrieveMfaDevicesForUserDto) { 
        this['mfa_devices'] = mfaDevices;
        this['user'] = user;
    }
    public withMfaDevices(mfaDevices: Array<MfaDeviceDto>): RetrieveMfaDevicesForUserEntryDto {
        this['mfa_devices'] = mfaDevices;
        return this;
    }
    public set mfaDevices(mfaDevices: Array<MfaDeviceDto>  | undefined) {
        this['mfa_devices'] = mfaDevices;
    }
    public get mfaDevices(): Array<MfaDeviceDto> | undefined {
        return this['mfa_devices'];
    }
    public withUser(user: RetrieveMfaDevicesForUserDto): RetrieveMfaDevicesForUserEntryDto {
        this['user'] = user;
        return this;
    }
}