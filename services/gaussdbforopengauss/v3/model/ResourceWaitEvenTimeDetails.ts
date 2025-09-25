import { DataIoTime } from './DataIoTime';
import { LockTime } from './LockTime';
import { LwlockTime } from './LwlockTime';


export class ResourceWaitEvenTimeDetails {
    private 'data_io_time'?: DataIoTime;
    private 'lock_time'?: LockTime;
    private 'lwlock_time'?: LwlockTime;
    public constructor(dataIoTime?: DataIoTime, lockTime?: LockTime, lwlockTime?: LwlockTime) { 
        this['data_io_time'] = dataIoTime;
        this['lock_time'] = lockTime;
        this['lwlock_time'] = lwlockTime;
    }
    public withDataIoTime(dataIoTime: DataIoTime): ResourceWaitEvenTimeDetails {
        this['data_io_time'] = dataIoTime;
        return this;
    }
    public set dataIoTime(dataIoTime: DataIoTime  | undefined) {
        this['data_io_time'] = dataIoTime;
    }
    public get dataIoTime(): DataIoTime | undefined {
        return this['data_io_time'];
    }
    public withLockTime(lockTime: LockTime): ResourceWaitEvenTimeDetails {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: LockTime  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): LockTime | undefined {
        return this['lock_time'];
    }
    public withLwlockTime(lwlockTime: LwlockTime): ResourceWaitEvenTimeDetails {
        this['lwlock_time'] = lwlockTime;
        return this;
    }
    public set lwlockTime(lwlockTime: LwlockTime  | undefined) {
        this['lwlock_time'] = lwlockTime;
    }
    public get lwlockTime(): LwlockTime | undefined {
        return this['lwlock_time'];
    }
}