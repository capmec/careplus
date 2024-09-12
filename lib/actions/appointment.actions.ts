'use server';

import { ID } from 'node-appwrite';
import {
	APPOINTMENT_COLLECTION_ID,
	BUCKET_ID,
	DATABASE_ID,
	databases,
	ENDPOINT,
	PROJECT_ID,
} from '../appwrite.config';
import { parseStringify } from '../utils';

export const createAppointment = async (
	appointment: CreateAppointmentParams,
) => {
	try {
		// Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
		const newAppointment = await databases.createDocument(
			DATABASE_ID!,
			APPOINTMENT_COLLECTION_ID!,
			ID.unique(),
			appointment,
		);
		console.log('new Appointment', newAppointment);

		return parseStringify(newAppointment);
	} catch (error) {
		console.log(error);
	}
};
