export interface AffirmationsCardProps {
  title: string;
  data: GalleryPreviewData[];
}

export type GalleryPreviewData = {
  id: number;
  text: string;
  image: any;
};


export interface FormDataProps {
  email: string;
  password: string;
}