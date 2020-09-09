<%@ Page Language="VB" AutoEventWireup="false" CodeFile="VB.aspx.vb" Inherits="VB" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- #include file="head.html" -->
<body id="wrapper">
    <!-- #include file="navbar.html" -->
    <section class="features-icons bg-dark text-center" id="middle">
        <div class="container">
            <br>
            <h1 class="text-white">Parc Informatique</h1>
            <br>
            <form id="form1" runat="server">
            <asp:GridView ID="GridView1" CssClass ="table table-dark table-striped" runat="server" AutoGenerateColumns="false" DataKeyNames="id"
                OnRowDataBound="OnRowDataBound" OnRowEditing="OnRowEditing" OnRowCancelingEdit="OnRowCancelingEdit"
                OnRowUpdating="OnRowUpdating" OnRowDeleting="OnRowDeleting" EmptyDataText="No records has been added.">
                <Columns>
                     <asp:TemplateField HeaderText="Serial" ItemStyle-Width="150">
                        <ItemTemplate>
                            <asp:Label ID="lblSerial" runat="server" Text='<%# Eval("Serial") %>'></asp:Label>
                        </ItemTemplate>
                        <EditItemTemplate>
                            <asp:TextBox ID="txtSerial" runat="server" Text='<%# Eval("Serial") %>'></asp:TextBox>
                        </EditItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Nom" ItemStyle-Width="150">
                        <ItemTemplate>
                            <asp:Label ID="lblNom" runat="server" Text='<%# Eval("Nom") %>'></asp:Label>
                        </ItemTemplate>
                        <EditItemTemplate>
                            <asp:TextBox ID="txtNom" runat="server" Text='<%# Eval("Nom") %>'></asp:TextBox>
                        </EditItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Description" ItemStyle-Width="150">
                        <ItemTemplate>
                            <asp:Label ID="lblDescription" runat="server" Text='<%# Eval("Description") %>'></asp:Label>
                        </ItemTemplate>
                        <EditItemTemplate>
                            <asp:TextBox ID="txtDescription" runat="server" Text='<%# Eval("Description") %>'></asp:TextBox>
                        </EditItemTemplate>
                    </asp:TemplateField>
                   <asp:TemplateField HeaderText="Prix" ItemStyle-Width="150">
                        <ItemTemplate>
                            <asp:Label ID="lblPrix" runat="server" Text='<%# Eval("Prix") %>'></asp:Label>
                        </ItemTemplate>
                        <EditItemTemplate>
                            <asp:TextBox ID="txtPrix" runat="server" Text='<%# Eval("Prix") %>'></asp:TextBox>
                        </EditItemTemplate>
                    </asp:TemplateField>
                    <asp:CommandField  HeaderText="Actions"  ButtonType="Link" ShowEditButton="true" ShowDeleteButton="true"
                        ItemStyle-Width="150" />
                </Columns>
            </asp:GridView>
            <table class="table table-dark table-striped">
                <tr>
                    <td style="width: 150px">
                        Nom:<br />
                        <asp:TextBox ID="txtNom" runat="server" Width="140" />
                    </td>
                    <td style="width: 150px">
                        Country:<br />
                        <asp:TextBox ID="txtDescription" runat="server" Width="140" />
                    </td>
                          <td style="width: 150px">
                        Country:<br />
                        <asp:TextBox ID="intPrix" runat="server" Width="140" />
                    </td>
                    <td style="width: 100px">
                        <asp:Button ID="btnAdd" runat="server" Text="Add" OnClick="Insert" />
                    </td>
                </tr>
            </table>
            </form>
        </div>
        <!-- #include file="footer.html" -->
    </section>
</body>
</html>

