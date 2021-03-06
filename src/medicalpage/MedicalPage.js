import React from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import LocationInformation from './LocationInformation';
import MedicalInformation from './MedicalInformation';
import MedicalComment from './MedicalComment';

export default function MedicalPage({
  location,
  onLocationChange,
  medicationList,
  onSingleMedicationSubmit,
  onSingleMedicationDelete,
  onSingleMedicationChange,
  onMedicalCommentSubmit,
  medicalComments
}) {
  return (
    <>
      <Header>Informationen</Header>
      <ContentContainer>
        <LocationInformation
          location={location}
          onLocationChange={onLocationChange}
        />
        <MedicalInformation
          medicationList={medicationList}
          onSingleMedicationSubmit={onSingleMedicationSubmit}
          onSingleMedicationDelete={onSingleMedicationDelete}
          onSingleMedicationChange={onSingleMedicationChange}
        />
        <MedicalComment
          onMedicalCommentSubmit={onMedicalCommentSubmit}
          medicalComments={medicalComments}
        />
      </ContentContainer>
    </>
  );
}
