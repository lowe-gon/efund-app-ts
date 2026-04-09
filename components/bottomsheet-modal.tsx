import {
  type BottomSheetModalProps,
  BottomSheetModal as GorhomBottomSheetModal,
} from '@gorhom/bottom-sheet';
import React from 'react';
import BottomSheetBackdrop from './bottomsheet-backdrop';

interface IBottomSheetModalProps extends BottomSheetModalProps {
  children: React.ReactNode;
  showIndicator?: boolean;
}

export type BottomSheetModalRef = GorhomBottomSheetModal;

const BottomSheetModal = React.forwardRef<GorhomBottomSheetModal, IBottomSheetModalProps>(
  ({ showIndicator, children, ...props }, ref) => {
    return (
      <GorhomBottomSheetModal
        {...props}
        ref={ref}
        enableDynamicSizing={true}
        handleIndicatorStyle={{
          backgroundColor: 'gray',
          width: showIndicator ? 40 : 0,
        }}
        backgroundStyle={{
          backgroundColor: '#fff',
          borderRadius: 24,
        }}
        backdropComponent={BottomSheetBackdrop}>
        {children}
      </GorhomBottomSheetModal>
    );
  },
);

BottomSheetModal.displayName = 'BottomSheetModal';

export default BottomSheetModal;
