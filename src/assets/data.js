const orchids = [
  {
    id: 1,
    name: "orchid 1",
    category: "Phalaenopsis",
    image:
      "https://brocanvas.com/wp-content/uploads/hinh-anh-hoa-lan-dep-nhatv1628306453817.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 50.0,
    isFavorite: false,
  },
  {
    id: 2,
    name: "orchid 2",
    category: "Phalaenopsis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOUUCYAc89D5Hp5gqLNXNzl5-eQLUWHD_jA&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 70.0,
    isFavorite: false,
  },
  {
    id: 3,
    name: "orchid 3",
    category: "Phalaenopsis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Nd9v11q1-ceuMk4M8XzNDr_69TEBUtvHYw&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
  {
    id: 4,
    name: "orchid 4",
    category: "Cattleya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVv_NLgONGe_Cpht4K14DOwxLEI7Yb-Qf6bw&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
  {
    id: 5,
    name: "orchid 5",
    category: "Cattleya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX3wFl48PDz2O1pv8WpVHfNTJyiEO5MDtqA&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
  {
    id: 6,
    name: "orchid 6",
    category: "Cattleya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIOS9_rzyC_maIQTr4XLVp9wMkZhV6DguJw&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
  {
    id: 7,
    name: "orchid 7",
    category: "Oncidium",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ3CZOQl3w62msn-peiKUgkSgC_v_ZRyktA&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
  {
    id: 8,
    name: "orchid 8",
    category: "Oncidium",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkDBAYlYPinoRS-Hk8uNxRlWpiaLGJqMVog&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
  {
    id: 9,
    name: "orchid 9",
    category: "Oncidium",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtFMICr2Jc5ugfYFCPM2ci1ohocsMTF9AHQ&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
  {
    id: 10,
    name: "orchid 10",
    category: "Oncidium",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXgceuCo9-ZrD-xZhsPyS5IoipKRPGr_NoA&usqp=CAU",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    price: 60.0,
    isFavorite: false,
  },
];
export default orchids;

export const category = ["Phalaenopsis", "Cattleya", "Oncidium"];
