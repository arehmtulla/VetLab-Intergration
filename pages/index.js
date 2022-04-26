import Head from "next/head";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TransactionTable from "../components/TransactionTable";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Vetlab Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TransactionTable />
      </Box>
    </Box>
  );
}
