import Header from '@/components/Shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/Shared/TransformationForm';

function AddTransformationTypePage({ params: { type }}: SearchParamProps) {
    
  const transformation = transformationTypes[type];
  return (
    <>
      <Header 
      title={transformation.title} 
      subtitle={transformation.subTitle} 
      />

      <TransformationForm />
    </>
  )
}

export default AddTransformationTypePage