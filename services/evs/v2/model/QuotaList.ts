import { QuotaDetailBackupGigabytes } from './QuotaDetailBackupGigabytes';
import { QuotaDetailBackups } from './QuotaDetailBackups';
import { QuotaDetailGigabytes } from './QuotaDetailGigabytes';
import { QuotaDetailGigabytesGPSSD } from './QuotaDetailGigabytesGPSSD';
import { QuotaDetailGigabytesSAS } from './QuotaDetailGigabytesSAS';
import { QuotaDetailGigabytesSATA } from './QuotaDetailGigabytesSATA';
import { QuotaDetailGigabytesSSD } from './QuotaDetailGigabytesSSD';
import { QuotaDetailPerVolumeGigabytes } from './QuotaDetailPerVolumeGigabytes';
import { QuotaDetailSnapshots } from './QuotaDetailSnapshots';
import { QuotaDetailSnapshotsGPSSD } from './QuotaDetailSnapshotsGPSSD';
import { QuotaDetailSnapshotsSAS } from './QuotaDetailSnapshotsSAS';
import { QuotaDetailSnapshotsSATA } from './QuotaDetailSnapshotsSATA';
import { QuotaDetailSnapshotsSSD } from './QuotaDetailSnapshotsSSD';
import { QuotaDetailVolumes } from './QuotaDetailVolumes';
import { QuotaDetailVolumesGPSSD } from './QuotaDetailVolumesGPSSD';
import { QuotaDetailVolumesSAS } from './QuotaDetailVolumesSAS';
import { QuotaDetailVolumesSATA } from './QuotaDetailVolumesSATA';
import { QuotaDetailVolumesSSD } from './QuotaDetailVolumesSSD';


export class QuotaList {
    private 'backup_gigabytes': QuotaDetailBackupGigabytes | undefined;
    public backups: QuotaDetailBackups;
    public gigabytes: QuotaDetailGigabytes;
    public id: string;
    public snapshots: QuotaDetailSnapshots;
    public volumes: QuotaDetailVolumes;
    private 'gigabytes_SATA'?: QuotaDetailGigabytesSATA | undefined;
    private 'snapshots_SATA'?: QuotaDetailSnapshotsSATA | undefined;
    private 'volumes_SATA'?: QuotaDetailVolumesSATA | undefined;
    private 'gigabytes_SAS'?: QuotaDetailGigabytesSAS | undefined;
    private 'snapshots_SAS'?: QuotaDetailSnapshotsSAS | undefined;
    private 'volumes_SAS'?: QuotaDetailVolumesSAS | undefined;
    private 'gigabytes_SSD'?: QuotaDetailGigabytesSSD | undefined;
    private 'snapshots_SSD'?: QuotaDetailSnapshotsSSD | undefined;
    private 'volumes_SSD'?: QuotaDetailVolumesSSD | undefined;
    private 'gigabytes_GPSSD'?: QuotaDetailGigabytesGPSSD | undefined;
    private 'snapshots_GPSSD'?: QuotaDetailSnapshotsGPSSD | undefined;
    private 'volumes_GPSSD'?: QuotaDetailVolumesGPSSD | undefined;
    private 'per_volume_gigabytes'?: QuotaDetailPerVolumeGigabytes | undefined;
    public constructor(backupGigabytes?: any, backups?: any, gigabytes?: any, id?: any, snapshots?: any, volumes?: any) { 
        this['backup_gigabytes'] = backupGigabytes;
        this['backups'] = backups;
        this['gigabytes'] = gigabytes;
        this['id'] = id;
        this['snapshots'] = snapshots;
        this['volumes'] = volumes;
    }
    public withBackupGigabytes(backupGigabytes: QuotaDetailBackupGigabytes): QuotaList {
        this['backup_gigabytes'] = backupGigabytes;
        return this;
    }
    public set backupGigabytes(backupGigabytes: QuotaDetailBackupGigabytes | undefined) {
        this['backup_gigabytes'] = backupGigabytes;
    }
    public get backupGigabytes() {
        return this['backup_gigabytes'];
    }
    public withBackups(backups: QuotaDetailBackups): QuotaList {
        this['backups'] = backups;
        return this;
    }
    public withGigabytes(gigabytes: QuotaDetailGigabytes): QuotaList {
        this['gigabytes'] = gigabytes;
        return this;
    }
    public withId(id: string): QuotaList {
        this['id'] = id;
        return this;
    }
    public withSnapshots(snapshots: QuotaDetailSnapshots): QuotaList {
        this['snapshots'] = snapshots;
        return this;
    }
    public withVolumes(volumes: QuotaDetailVolumes): QuotaList {
        this['volumes'] = volumes;
        return this;
    }
    public withGigabytesSATA(gigabytesSATA: QuotaDetailGigabytesSATA): QuotaList {
        this['gigabytes_SATA'] = gigabytesSATA;
        return this;
    }
    public set gigabytesSATA(gigabytesSATA: QuotaDetailGigabytesSATA | undefined) {
        this['gigabytes_SATA'] = gigabytesSATA;
    }
    public get gigabytesSATA() {
        return this['gigabytes_SATA'];
    }
    public withSnapshotsSATA(snapshotsSATA: QuotaDetailSnapshotsSATA): QuotaList {
        this['snapshots_SATA'] = snapshotsSATA;
        return this;
    }
    public set snapshotsSATA(snapshotsSATA: QuotaDetailSnapshotsSATA | undefined) {
        this['snapshots_SATA'] = snapshotsSATA;
    }
    public get snapshotsSATA() {
        return this['snapshots_SATA'];
    }
    public withVolumesSATA(volumesSATA: QuotaDetailVolumesSATA): QuotaList {
        this['volumes_SATA'] = volumesSATA;
        return this;
    }
    public set volumesSATA(volumesSATA: QuotaDetailVolumesSATA | undefined) {
        this['volumes_SATA'] = volumesSATA;
    }
    public get volumesSATA() {
        return this['volumes_SATA'];
    }
    public withGigabytesSAS(gigabytesSAS: QuotaDetailGigabytesSAS): QuotaList {
        this['gigabytes_SAS'] = gigabytesSAS;
        return this;
    }
    public set gigabytesSAS(gigabytesSAS: QuotaDetailGigabytesSAS | undefined) {
        this['gigabytes_SAS'] = gigabytesSAS;
    }
    public get gigabytesSAS() {
        return this['gigabytes_SAS'];
    }
    public withSnapshotsSAS(snapshotsSAS: QuotaDetailSnapshotsSAS): QuotaList {
        this['snapshots_SAS'] = snapshotsSAS;
        return this;
    }
    public set snapshotsSAS(snapshotsSAS: QuotaDetailSnapshotsSAS | undefined) {
        this['snapshots_SAS'] = snapshotsSAS;
    }
    public get snapshotsSAS() {
        return this['snapshots_SAS'];
    }
    public withVolumesSAS(volumesSAS: QuotaDetailVolumesSAS): QuotaList {
        this['volumes_SAS'] = volumesSAS;
        return this;
    }
    public set volumesSAS(volumesSAS: QuotaDetailVolumesSAS | undefined) {
        this['volumes_SAS'] = volumesSAS;
    }
    public get volumesSAS() {
        return this['volumes_SAS'];
    }
    public withGigabytesSSD(gigabytesSSD: QuotaDetailGigabytesSSD): QuotaList {
        this['gigabytes_SSD'] = gigabytesSSD;
        return this;
    }
    public set gigabytesSSD(gigabytesSSD: QuotaDetailGigabytesSSD | undefined) {
        this['gigabytes_SSD'] = gigabytesSSD;
    }
    public get gigabytesSSD() {
        return this['gigabytes_SSD'];
    }
    public withSnapshotsSSD(snapshotsSSD: QuotaDetailSnapshotsSSD): QuotaList {
        this['snapshots_SSD'] = snapshotsSSD;
        return this;
    }
    public set snapshotsSSD(snapshotsSSD: QuotaDetailSnapshotsSSD | undefined) {
        this['snapshots_SSD'] = snapshotsSSD;
    }
    public get snapshotsSSD() {
        return this['snapshots_SSD'];
    }
    public withVolumesSSD(volumesSSD: QuotaDetailVolumesSSD): QuotaList {
        this['volumes_SSD'] = volumesSSD;
        return this;
    }
    public set volumesSSD(volumesSSD: QuotaDetailVolumesSSD | undefined) {
        this['volumes_SSD'] = volumesSSD;
    }
    public get volumesSSD() {
        return this['volumes_SSD'];
    }
    public withGigabytesGPSSD(gigabytesGPSSD: QuotaDetailGigabytesGPSSD): QuotaList {
        this['gigabytes_GPSSD'] = gigabytesGPSSD;
        return this;
    }
    public set gigabytesGPSSD(gigabytesGPSSD: QuotaDetailGigabytesGPSSD | undefined) {
        this['gigabytes_GPSSD'] = gigabytesGPSSD;
    }
    public get gigabytesGPSSD() {
        return this['gigabytes_GPSSD'];
    }
    public withSnapshotsGPSSD(snapshotsGPSSD: QuotaDetailSnapshotsGPSSD): QuotaList {
        this['snapshots_GPSSD'] = snapshotsGPSSD;
        return this;
    }
    public set snapshotsGPSSD(snapshotsGPSSD: QuotaDetailSnapshotsGPSSD | undefined) {
        this['snapshots_GPSSD'] = snapshotsGPSSD;
    }
    public get snapshotsGPSSD() {
        return this['snapshots_GPSSD'];
    }
    public withVolumesGPSSD(volumesGPSSD: QuotaDetailVolumesGPSSD): QuotaList {
        this['volumes_GPSSD'] = volumesGPSSD;
        return this;
    }
    public set volumesGPSSD(volumesGPSSD: QuotaDetailVolumesGPSSD | undefined) {
        this['volumes_GPSSD'] = volumesGPSSD;
    }
    public get volumesGPSSD() {
        return this['volumes_GPSSD'];
    }
    public withPerVolumeGigabytes(perVolumeGigabytes: QuotaDetailPerVolumeGigabytes): QuotaList {
        this['per_volume_gigabytes'] = perVolumeGigabytes;
        return this;
    }
    public set perVolumeGigabytes(perVolumeGigabytes: QuotaDetailPerVolumeGigabytes | undefined) {
        this['per_volume_gigabytes'] = perVolumeGigabytes;
    }
    public get perVolumeGigabytes() {
        return this['per_volume_gigabytes'];
    }
}