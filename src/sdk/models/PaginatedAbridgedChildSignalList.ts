/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbridgedChildSignal } from './AbridgedChildSignal';

export type PaginatedAbridgedChildSignalList = {
    _links?: {
        self?: {
            href?: string | null;
        };
        next?: {
            href?: string | null;
        };
        previous?: {
            href?: string | null;
        };
    };
    count?: number;
    results?: Array<AbridgedChildSignal>;
};

