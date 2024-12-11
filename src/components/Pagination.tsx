import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  totalResults: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / 10);

  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
    />
  );
};

export default Pagination;
